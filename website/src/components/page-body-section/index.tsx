import styles from './index.module.scss';

interface PageBodySectionProps {
  children: React.ReactNode;
  className?: string;
}

const PageBodySection: React.FC<PageBodySectionProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles['page-body']} ${className ?? ''}`}>
      <div className="content-wrapper">
        <div className={styles['page-body__content']}>{children}</div>
      </div>
    </div>
  );
};

export default PageBodySection;
