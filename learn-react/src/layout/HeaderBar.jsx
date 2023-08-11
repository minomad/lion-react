import Heading from '@/components/Heading';
import styles from '@/styles/HeaderBar.module.css'

function HeaderBar() {
  return (
    <header className={styles.container}>
      <Heading />
    </header>
  );
}

export default HeaderBar;
