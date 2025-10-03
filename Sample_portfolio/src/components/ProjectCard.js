import React from 'react';
import styles from './ProjectCard.module.css';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, screenshot, githubLink, liveDemoLink }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div className={styles.projectCard} variants={cardVariants}>
      <img src={screenshot} alt={title} className={styles.projectScreenshot} />
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.projectLinks}>
        {githubLink && (
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub /> GitHub
          </motion.a>
        )}
        {liveDemoLink && (
          <motion.a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExternalLinkAlt /> Live Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard; 