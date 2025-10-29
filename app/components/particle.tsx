'use client'

import { useCallback, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const [particleCount, setParticleCount] = useState<number>(0);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // Update particle count
    const updateCount = () => {
      if (container) {
        setParticleCount(container.particles.count);
      }
      requestAnimationFrame(updateCount);
    };
    updateCount();
  }, []);

  return (
    <>
      {/* Fixed background particles */}
      <div className="fixed inset-0 -z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: isDarkMode ? "#000000" : "#ffffff",
              },
              position: "50% 50%",
              repeat: "no-repeat",
              size: "20%",
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 250,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                grab: {
                  distance: 400,
                  links: {
                    opacity: 1,
                  },
                },
                push: {
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
              },
            },
            particles: {
              color: {
                value: isDarkMode ? "#ffffff" : "#000000",
              },
              links: {
                color: isDarkMode ? "#ffffff" : "#000000",
                distance: 175,
                enable: true,
                opacity: 0.015,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: true,
                speed: 0.45,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 160,
              },
              opacity: {
                value: 1,
                random: true,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0,
                  sync: false,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
                random: true,
              },
            },
            detectRetina: true,
          }}
          className="w-full h-full"
        />
      </div>

    </>
  );
}