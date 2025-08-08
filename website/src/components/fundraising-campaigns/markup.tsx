'use client';

import { useQuery } from '@apollo/client';
import {
  GetFundraisingCampaignsDocument,
  type GetFundraisingCampaignsQuery,
  useGetFundraisingCampaignsSuspenseQuery,
} from '@graphql/queries/fundraising-campaigns/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { fundraisingCampaignsHeadingId } from '@models/headings';
import { fundraisingCampaignsLinkId } from '@models/links';
import { getCampaigns } from '@services/givebutter/campaigns';
import type { GivebutterCampaign } from '@shared/types/api';
import type { RequestResult } from '@shared/types/request';
import { useEffect, useReducer } from 'react';
import styles from './index.module.scss';

export interface GivebutterCampaignProps {
  lang: AvailableLocale;
}

interface State {
  campaigns: GivebutterCampaign[];
  requestResult: RequestResult;
}

const initialState: State = {
  campaigns: [],
  requestResult: 'idle',
};

type Action =
  | { type: 'setLoading' }
  | { type: 'setIdle' }
  | { type: 'setSuccess' }
  | { type: 'setCampaigns'; payload: GivebutterCampaign[] }
  | { type: 'setError' };

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

// https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs#preloading-data-in-rsc-for-usage-in-client-components

// https://stackoverflow.com/a/53800501/4842303
const FundrasingCampaigns: React.FC<GivebutterCampaignProps> = ({ lang }) => {
  const [{ campaigns, requestResult }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const { data, loading, error } = useGetFundraisingCampaignsSuspenseQuery({
    variables: {
      fundraisingCampaignsHeadingId,
      fundraisingCampaignsLinkId,
      locale: lang,
    },
  });

  if (loading) {
    return (
      <div className={styles.fundraising_campaigns}>
        <div className={styles.fundraising_campaigns__content_wrapper}>
          <section>Loading...</section>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.fundraising_campaigns}>
        <div className={styles.fundraising_campaigns__content_wrapper}>
          <section>Error loading campaigns</section>
        </div>
      </div>
    );
  }

  const { fundraisingCampaignsHeading, fundraisingCampaignsLink } = data || {};

  return (
    <div className={styles.fundraising_campaigns}>
      <div className={styles.fundraising_campaigns__content_wrapper}>
        <section>
          <h2>{fundraisingCampaignsHeading?.content}</h2>

          <ul>
            <li>
              <picture>
                <img src="" alt="" />
              </picture>
              <h3>Campaign name</h3>
              <p>Created</p>
            </li>
          </ul>
          <a href={fundraisingCampaignsLink?.target?.url ?? '/'}>
            {fundraisingCampaignsLink?.text?.content ?? ''}
          </a>
        </section>
      </div>
    </div>
  );
};

export default FundrasingCampaigns;
