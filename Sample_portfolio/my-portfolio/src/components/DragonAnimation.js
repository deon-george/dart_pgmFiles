import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './DragonAnimation.css';

const DragonAnimation = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);

  return (
    <div className="dragon-animation-wrapper">
      {/* Dragon created with Framer Motion */}
      <div className="dragon-container">
        <motion.div
          className="dragon-body"
          initial={{ scale: 0.9 }}
          animate={{ 
            scale: [0.9, 1.02, 0.9],
            rotate: [0, 1, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="dragon-head"
            animate={{ 
              rotate: [0, 5, 0, -2, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="dragon-eye left"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [1, 0.85, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="dragon-eye right"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [1, 0.85, 1] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.2,
                ease: "easeInOut"
              }}
            />
            <div className="dragon-snout" />
            <motion.div 
              className="dragon-horn left"
              animate={{ rotate: [-2, 3, -2] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
            />
            <motion.div 
              className="dragon-horn right"
              animate={{ rotate: [2, -3, 2] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
            />
          </motion.div>
          
          <motion.div
            className="dragon-neck"
            animate={{ 
              rotate: [-2, 3, -2],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4.5,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="dragon-fire-origin"
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          />
        </motion.div>
      </div>
      
      {/* Blue fire particles */}
      <div className="fire-particles-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            fpsLimit: 60,
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 200
                }
              },
              color: {
                value: ["#29d2ff", "#00a2ff", "#0066ff", "#2d00f7"],
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: 0.8,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 0.1,
                  sync: false
                }
              },
              life: {
                duration: {
                  value: 1.5
                },
              },
              move: {
                enable: true,
                speed: 6,
                direction: "left",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                },
                onclick: {
                  enable: false,
                },
                resize: true
              }
            },
            detectRetina: true
          }}
        />
      </div>
    </div>
  );
};

export default DragonAnimation; 