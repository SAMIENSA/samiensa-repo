"use client";

import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fill();
      }
    }

    let particles: Particle[] = [];
    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.height * canvas.width) / 12000; // Reduced particle density
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 1.2 + 0.3; // Smaller particles
        const x = Math.random() * (innerWidth - size * 2) + size;
        const y = Math.random() * (innerHeight - size * 2) + size;
        const speedX = (Math.random() - 0.5) * 0.3; // Slower speed
        const speedY = (Math.random() - 0.5) * 0.3; // Slower speed
        particles.push(new Particle(x, y, size, speedX, speedY));
      }
    };

    const connect = () => {
        if (!ctx) return;
        let opacityValue = 1;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                const distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                               + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                if (distance < (canvas.width / 8) * (canvas.height / 8)) { // Increased connection distance slightly
                    opacityValue = 1 - (distance / 25000); // Adjusted opacity calculation
                    const lineColor = theme === 'dark' ? `rgba(255, 255, 255, ${opacityValue})` : `rgba(0, 0, 0, ${opacityValue})`;
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 0.3; // Thinner lines
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      // Set particle color based on theme
      const particleColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
      ctx.fillStyle = particleColor;

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Re-run effect when theme changes

  return (
    <div className="fixed inset-0 -z-10">
       <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#1a1a40] to-[#3a0ca3] opacity-80 dark:opacity-100" />
       <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
    </div>
  );
}
