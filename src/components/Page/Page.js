import styles from './Page.module.scss';

const Page = props => {
  const { children } = props;
  return (
    <div className={styles.page}>
      <main>{children}</main>
    </div>
  );
};

export default Page;
