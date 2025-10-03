import React from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          Contact Me
        </motion.h2>
        <motion.p className={styles.intro} variants={itemVariants}>
          Feel free to reach out to me through email or connect with me on social media.
        </motion.p>
        <motion.div className={styles.contactInfo}>
          <motion.div className={styles.contactItem} variants={itemVariants}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:your.email@example.com" className={styles.link}>
              your.email@example.com
            </a>
          </motion.div>
          <motion.div className={styles.contactItem} variants={itemVariants}>
            <FaGithub className={styles.icon} />
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.link}>
              GitHub
            </a>
          </motion.div>
          <motion.div className={styles.contactItem} variants={itemVariants}>
            <FaLinkedin className={styles.icon} />
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={styles.link}>
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact; 