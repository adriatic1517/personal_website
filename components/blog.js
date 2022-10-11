
import styles from '../styles/Blog.module.css';

export default function Blog({ children }) {
    return <div className={styles.container}>{children}</div>;
  }