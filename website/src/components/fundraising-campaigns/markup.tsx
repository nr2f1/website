'use client';

import { useGetFundraisingCampaignsSuspenseQuery } from '@graphql/queries/fundraising-campaigns/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { fundraisingCampaignsHeadingId } from '@models/headings';
import { fundraisingCampaignsLinkId } from '@models/links';
import { getCampaigns } from '@services/givebutter/campaigns';
import type { CampaignApiResponse } from '@shared/types/api';
import getRelativeTime from '@shared/types/get-relative-time';
import type { RequestResult } from '@shared/types/request';
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
};

const FundrasingCampaigns: React.FC<GivebutterCampaignProps> = ({ lang }) => {
  const [{ campaigns, requestResult, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const { data, error: contentfulError } =
    useGetFundraisingCampaignsSuspenseQuery({
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
                  <li key={crypto.randomUUID()}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <picture>
                        <img src={coverUrl} alt={title} />
                      </picture>
                      <h3>{title}</h3>
                      <p>
                        {createdI18n[lang]}{' '}
                        {getRelativeTime({
                          from: new Date(created_at),
                          lang,
                          to: new Date(),
                        })}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
              <a href={fundraisingCampaignsLink?.target?.url ?? '/'}>
                {fundraisingCampaignsLink?.text?.content ?? ''}
              </a>
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
