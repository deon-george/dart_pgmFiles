import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          About Me
        </motion.h2>
        <motion.p className={styles.bio} variants={itemVariants}>
          Hello! I'm Deon George, a passionate frontend developer with a keen eye for detail and a love for creating intuitive and engaging user experiences. I have experience building responsive web applications using modern web technologies.
          My journey into web development began with a fascination for how websites are built and interact with users. Since then, I've dedicated myself to learning and mastering various tools and frameworks, always striving to write clean, efficient, and maintainable code.
        </motion.p>
        <motion.h3 className={styles.skillsTitle} variants={itemVariants}>
          Skills
        </motion.h3>
        <motion.div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.skillItem}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 