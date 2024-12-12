import styles from './index.module.scss';

const Spinner = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>spinner</title>
    <g className={styles.spinner}>
      <path d="M11 1h2v5h-2z" opacity=".14" />
      <path d="m16.634 1.974 1.732 1-2.5 4.33-1.732-1z" opacity=".29" />
      <path d="m21.026 5.634 1 1.732-4.33 2.5-1-1.732z" opacity=".43" />
      <path d="M23 11v2h-5v-2z" opacity=".57" />
      <path d="m22.026 16.634-1 1.732-4.33-2.5 1-1.732z" opacity=".71" />
      <path d="m18.366 21.026-1.732 1-2.5-4.33 1.732-1z" opacity=".86" />
      <path d="M13 23h-2v-5h2z" />
    </g>
  </svg>
);

export default Spinner;
