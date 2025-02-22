import styles from './index.module.scss';

interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  return (
    <details className={styles.accordion}>
      <summary>{title}</summary>
      <div>{content}</div>
    </details>
  );
};

export default Accordion;
