'use client';

import { useSuspenseQuery } from '@apollo/client/react';
import {
  GetFundraisingCampaignsDocument,
  type GetFundraisingCampaignsQuery,
  type GetFundraisingCampaignsQueryVariables,
} from '@graphql/queries/fundraising-campaigns/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { fundraisingCampaignsHeadingId } from '@models/headings';
import { fundraisingCampaignsLinkId } from '@models/links';
import { getCampaigns } from '@services/givebutter/campaigns';
import type { CampaignApiResponse } from '@shared/types/api';
import type { RequestResult } from '@shared/types/request';
import getRelativeTime from '@shared/utils/get-relative-time';
import { useEffect, useReducer } from 'react';
import styles from './index.module.scss';

export interface GivebutterCampaignProps {
  lang: AvailableLocale;
}

interface State {
  campaigns: CampaignApiResponse[];
  requestResult: RequestResult;
  error?: Error;
}

const initialState: State = {
  campaigns: [],
  requestResult: 'idle',
};

type Action =
  | { type: 'setLoading' }
  | { type: 'setIdle' }
  | { type: 'setSuccess' }
  | { type: 'setCampaigns'; payload: CampaignApiResponse[] }
  | { type: 'setError'; payload: Error };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setLoading':
      return {
        ...state,
        requestResult: 'loading',
      };
    case 'setIdle':
      return {
        ...state,
        requestResult: 'idle',
      };
    case 'setError':
      return {
        ...state,
        error: action.payload,
        requestResult: 'error',
      };

    case 'setCampaigns':
      return {
        ...state,
        campaigns: action.payload,
        requestResult: 'success',
      };

    default:
      throw new Error(`Invalid action type ${JSON.stringify(action)}`);
  }
};

const createdI18n: Record<AvailableLocale, string> = {
  de: 'Erstellt',
  en: 'Created',
  es: 'Creado',
  fr: 'Créé',
  it: 'Creato',
  'pt-BR': 'Criado',
  'zh-CN': '创建',
};

const now = new Date();

type FundRaisingCampaignCardProps = Omit<
  CampaignApiResponse,
  'raised' | 'currency'
> & {
  lang: AvailableLocale;
};

const FundRaisingCampaignCard: React.FC<FundRaisingCampaignCardProps> = ({
  title,
  coverUrl,
  created_at,
  url,
  lang,
}) => {
  const { isoDurationString, relativeString } = getRelativeTime({
    from: new Date(created_at),
    lang,
    to: now,
  });

  return (
    <li key={crypto.randomUUID()} className={styles.campaign}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div
          className={styles.campaign__cover}
          style={{ backgroundImage: `url(${coverUrl})` }}
        />
        <div className={styles.campaign__details}>
          <h3>{title}</h3>
          <p>
            {createdI18n[lang]}{' '}
            <time dateTime={isoDurationString}>{relativeString}</time>
          </p>
        </div>
      </a>
    </li>
  );
};

const FundrasingCampaigns: React.FC<GivebutterCampaignProps> = ({ lang }) => {
  const [{ campaigns, requestResult, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const { data, error: contentfulError } = useSuspenseQuery<
    GetFundraisingCampaignsQuery,
    GetFundraisingCampaignsQueryVariables
  >(GetFundraisingCampaignsDocument, {
    variables: {
      fundraisingCampaignsHeadingId,
      fundraisingCampaignsLinkId,
      locale: lang,
    },
  });

  useEffect(() => {
    getCampaigns()
      .then((campaigns) => {
        dispatch({ payload: campaigns, type: 'setCampaigns' });
      })
      .catch((error) => {
        dispatch({ payload: error, type: 'setError' });
      });

    return () => {
      dispatch({ type: 'setIdle' });
    };
  }, []);

  switch (true) {
    case contentfulError || error || requestResult === 'error': {
      return (
        <div className={styles.fundraising_campaigns}>
          <div className={styles.fundraising_campaigns__content_wrapper}>
            <section>Error loading campaigns</section>
          </div>
        </div>
      );
    }

    case requestResult === 'success': {
      const { fundraisingCampaignsHeading, fundraisingCampaignsLink } =
        data || {};
      return (
        <div className={styles.fundraising_campaigns}>
          <div className={styles.fundraising_campaigns__content_wrapper}>
            <section>
              <h2>{fundraisingCampaignsHeading?.content}</h2>

              <ul>
                {campaigns.map(({ title, coverUrl, created_at, url }) => (
                  <FundRaisingCampaignCard
                    title={title}
                    coverUrl={coverUrl}
                    created_at={created_at}
                    url={url}
                    lang={lang}
                    key={crypto.randomUUID()}
                  />
                ))}
              </ul>
              <div className={styles.fundraising_campaigns__cta}>
                <a
                  href={fundraisingCampaignsLink?.target?.url ?? '/'}
                  className="button button--on-light-open-new-tab"
                >
                  {fundraisingCampaignsLink?.text?.content ?? ''}
                </a>
              </div>
            </section>
          </div>
        </div>
      );
    }
    default: {
      const { fundraisingCampaignsHeading } = data || {};
      return (
        <div className={styles.fundraising_campaigns}>
          <div className={styles.fundraising_campaigns__content_wrapper}>
            <section>
              <h2>{fundraisingCampaignsHeading?.content}</h2>

              <p>Loading campaigns</p>
            </section>
          </div>
        </div>
      );
    }
  }
};

export default FundrasingCampaigns;
