'use client';

import { useSuspenseQuery } from '@apollo/client/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  GetConferenceBannerDocument,
  type GetConferenceBannerQuery,
  type GetConferenceBannerQueryVariables,
} from '@graphql/queries/conference-banner/index.generated';
import { routes } from '@routes/index';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import Link from 'next/link';
import { useEffect, useReducer } from 'react';
import styles from './index.module.scss';

const conferenceDate = new Date(
  'Wed Apr 08 2026 05:00:00 GMT+0100 (British Summer Time)',
);

interface State {
  isHydrated: boolean;
  hasFinished: boolean;
  timeRemaining: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const initialState: State = {
  hasFinished: false,
  isHydrated: false,
  timeRemaining: {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
};

type Action =
  | { type: 'setIsHydrated'; payload: boolean }
  | { type: 'setHasFinished'; payload: boolean }
  | { type: 'setTimeLeft'; payload: State['timeRemaining'] };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setIsHydrated':
      return {
        ...state,
        isHydrated: action.payload,
      };
    case 'setHasFinished':
      return {
        ...state,
        hasFinished: action.payload,
      };

    case 'setTimeLeft':
      return {
        ...state,
        timeRemaining: action.payload,
      };
    default:
      throw new Error(`Invalid action type ${JSON.stringify(action)}`);
  }
};

const ConferenceBannerMarkup: React.FC<ComponentPropsWithLocale> = ({
  lang,
}) => {
  const [
    {
      isHydrated,
      hasFinished,
      timeRemaining: { days, hours, minutes, seconds },
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const { data } = useSuspenseQuery<
    GetConferenceBannerQuery,
    GetConferenceBannerQueryVariables
  >(GetConferenceBannerDocument, {
    variables: { id: '7e3fMz1x8E2LYxiSatGZfg', locale: lang },
  });

  useEffect(() => {
    dispatch({ payload: true, type: 'setIsHydrated' });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      // Calculate difference in milliseconds
      const difference = conferenceDate.getTime() - now.getTime();

      if (difference <= 0) {
        // Stop the timer if we reach the date
        clearInterval(intervalId);
        dispatch({ payload: true, type: 'setHasFinished' });
        dispatch({
          payload: { days: 0, hours: 0, minutes: 0, seconds: 0 },
          type: 'setTimeLeft',
        });
      } else {
        // Calculate time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        dispatch({
          payload: { days, hours, minutes, seconds },
          type: 'setTimeLeft',
        });
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (!data || !isHydrated || !data.conferenceBanner || hasFinished) {
    return null;
  }

  const { conferenceBanner } = data;

  return (
    <div className={styles.conferenceBanner}>
      <div className={'content-wrapper'}>
        <div className={styles.conferenceBanner__content}>
          <div className={styles.conferenceBanner__text}>
            {documentToReactComponents(
              conferenceBanner?.content?.content?.json,
            )}
          </div>
          <div className={styles.conferenceBanner__countdown}>
            <div>
              <output>{days}</output>
              <span>days</span>
            </div>
            <div>
              <output>{hours}</output>
              <span>hrs</span>
            </div>
            <div>
              <output>{minutes}</output>
              <span>min</span>
            </div>
            <div>
              <output>{seconds}</output>
              <span>sec</span>
            </div>
          </div>
          <div className={styles.conferenceBanner__cta}>
            <Link
              href={
                conferenceBanner.cta?.target?.url ?? routes.conference(lang)
              }
              className="button button--on-dark"
            >
              {conferenceBanner.cta?.text?.content}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceBannerMarkup;
