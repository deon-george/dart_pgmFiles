import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className={styles.heroSection}>
      <motion.div
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className={styles.profilePicture}
          variants={itemVariants}
        />
        <motion.h1 className={styles.name} variants={itemVariants}>
          Deon George
        </motion.h1>
        <motion.p className={styles.role} variants={itemVariants}>
          Frontend Developer
        </motion.p>
        <motion.p className={styles.intro} variants={itemVariants}>
          Passionate about creating interactive and user-friendly web applications.
          I specialize in building responsive and dynamic interfaces with React.
        </motion.p>
        <motion.a
          href="/path/to/your/resume.pdf"
          download
          className={styles.downloadButton}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero; 