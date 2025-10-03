import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Deon George. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 