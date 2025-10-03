import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a onClick={() => scrollToSection('home')} className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a onClick={() => scrollToSection('about')} className={styles.navLink}>About</a>
          </li>
          <li className={styles.navItem}>
            <a onClick={() => scrollToSection('projects')} className={styles.navLink}>Projects</a>
          </li>
          <li className={styles.navItem}>
            <a onClick={() => scrollToSection('contact')} className={styles.navLink}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 