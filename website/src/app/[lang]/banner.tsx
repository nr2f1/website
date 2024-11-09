import Banner from '@components/banner';
import type { AvailableLocale } from '@i18n/locales';

interface HomePageBannerProps {
  lang: AvailableLocale;
}

const HomePageBanner: React.FC<HomePageBannerProps> = ({ lang }) => {
  return (
    <Banner
      headingContent="2024 family conference"
      textContent={
        <p>
          The conference is an integral part of our mission. In April 2024, we
          brought together 132 attendees (in person and virtually), families and
          researchers from around the world. We had representation from 11
          countries and 23 US states.
        </p>
      }
      ctaContent="Learn more"
      ctaUrl="/"
      imageUrl="https://pataruco.s3.amazonaws.com/public/banner.jpg"
    />
  );
};

export default HomePageBanner;
