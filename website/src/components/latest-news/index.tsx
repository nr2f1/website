import styles from './index.module.scss';

import Link from 'next/link';

const LatestNews = () => {
  return (
    <section className={styles.news}>
      <div className="content-wrapper">
        <h2>Latest News</h2>

        <ul className={styles.news__articles}>
          <li className={styles.article}>
            <Link href="/">
              <article className={styles.article}>
                <div
                  className={styles.article__img}
                  style={{
                    backgroundImage:
                      'url(https://pataruco.s3.amazonaws.com/public/latest-news.png)',
                  }}
                />
                <div>
                  <p className={styles.article__label}>Blog post</p>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h3>
                  <p className={styles.article__date}>
                    <time dateTime="24/05/2024">May 24, 2024</time>
                  </p>
                </div>
              </article>
            </Link>
          </li>
          <li className={styles.article}>
            <Link href="/">
              <article className={styles.article}>
                <div
                  className={styles.article__img}
                  style={{
                    backgroundImage:
                      'url(https://pataruco.s3.amazonaws.com/public/latest-news.png)',
                  }}
                />
                <div>
                  <p className={styles.article__label}>Blog post</p>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h3>
                  <p className={styles.article__date}>
                    <time dateTime="24/05/2024">May 24, 2024</time>
                  </p>
                </div>
              </article>
            </Link>
          </li>
          <li className={styles.article}>
            <Link href="/">
              <article className={styles.article}>
                <div
                  className={styles.article__img}
                  style={{
                    backgroundImage:
                      'url(https://pataruco.s3.amazonaws.com/public/latest-news.png)',
                  }}
                />
                <div>
                  <p className={styles.article__label}>Blog post</p>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h3>
                  <p className={styles.article__date}>
                    <time dateTime="24/05/2024">May 24, 2024</time>
                  </p>
                </div>
              </article>
            </Link>
          </li>
          <li className={styles.article}>
            <Link href="/">
              <article className={styles.article}>
                <div
                  className={styles.article__img}
                  style={{
                    backgroundImage:
                      'url(https://pataruco.s3.amazonaws.com/public/latest-news.png)',
                  }}
                />
                <div>
                  <p className={styles.article__label}>Blog post</p>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h3>
                  <p className={styles.article__date}>
                    <time dateTime="24/05/2024">May 24, 2024</time>
                  </p>
                </div>
              </article>
            </Link>
          </li>
          <li className={styles.article}>
            <Link href="/">
              <article className={styles.article}>
                <div
                  className={styles.article__img}
                  style={{
                    backgroundImage:
                      'url(https://pataruco.s3.amazonaws.com/public/latest-news.png)',
                  }}
                />
                <div>
                  <p className={styles.article__label}>Blog post</p>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h3>
                  <p className={styles.article__date}>
                    <time dateTime="24/05/2024">May 24, 2024</time>
                  </p>
                </div>
              </article>
            </Link>
          </li>
          <li className={styles.article}>
            <Link href="/">
              <article className={styles.article}>
                <div
                  className={styles.article__img}
                  style={{
                    backgroundImage:
                      'url(https://pataruco.s3.amazonaws.com/public/latest-news.png)',
                  }}
                />
                <div>
                  <p className={styles.article__label}>Blog post</p>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h3>
                  <p className={styles.article__date}>
                    <time dateTime="24/05/2024">May 24, 2024</time>
                  </p>
                </div>
              </article>
            </Link>
          </li>
        </ul>
        <Link
          href="/"
          className={`${styles.news__more} button button--on-light`}
        >
          View all updates
        </Link>
      </div>
    </section>
  );
};

export default LatestNews;
