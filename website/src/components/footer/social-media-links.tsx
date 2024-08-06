import styles from './social-media-links.module.scss';

interface SocialMediaLinksProps {
  variant?: 'light' | 'dark';
}

interface SocialMediaItem extends SocialMediaLinksProps {
  label: string;
  url: string;
}

const SocialMediaItems = [
  {
    label: 'youtube',
    url: 'https://www.youtube.com/channel/UCzNB3YWG3ZB6Hb_jSeph93A/videos',
  },
  { label: 'x', url: 'https://twitter.com/nr2f1foundation' },
  { label: 'facebook', url: 'https://www.facebook.com/NR2F1' },
  { label: 'instagram', url: 'https://www.instagram.com/nr2f1foundation' },
];

const SocialMediaItem: React.FC<SocialMediaItem> = ({
  label,
  url,
  variant = 'light',
}) => {
  return (
    <li
      className={[
        styles.social_media_item,
        styles[`social_media_item--${variant}-${label}`],
      ].join(' ')}
    >
      <a
        href={url}
        className={`button ${
          variant === 'light' ? 'button--on-light' : 'button--on-dark'
        }`}
      >
        <span>{label}</span>
      </a>
    </li>
  );
};

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  variant = 'light',
}) => {
  return (
    <ul className={styles.social_media_links}>
      {SocialMediaItems.map((item) => (
        <SocialMediaItem
          {...item}
          variant={variant}
          key={crypto.randomUUID()}
        />
      ))}
    </ul>
  );
};

export default SocialMediaLinks;
