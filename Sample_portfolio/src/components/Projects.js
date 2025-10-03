import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Project One',
    description: 'A brief description of project one, highlighting its key features and technologies used.',
    screenshot: 'https://via.placeholder.com/400x250',
    githubLink: 'https://github.com/yourusername/project-one',
    liveDemoLink: 'https://projectone.com',
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two, highlighting its key features and technologies used.',
    screenshot: 'https://via.placeholder.com/400x250',
    githubLink: 'https://github.com/yourusername/project-two',
    liveDemoLink: 'https://projecttwo.com',
  },
  {
    title: 'Project Three',
    description: 'A brief description of project three, highlighting its key features and technologies used.',
    screenshot: 'https://via.placeholder.com/400x250',
    githubLink: 'https://github.com/yourusername/project-three',
    liveDemoLink: 'https://projectthree.com',
  },
  {
    title: 'Project Four',
    description: 'A brief description of project four, highlighting its key features and technologies used.',
    screenshot: 'https://via.placeholder.com/400x250',
    githubLink: 'https://github.com/yourusername/project-four',
    liveDemoLink: 'https://projectfour.com',
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          My Projects
        </motion.h2>
        <motion.div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              screenshot={project.screenshot}
              githubLink={project.githubLink}
              liveDemoLink={project.liveDemoLink}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects; 