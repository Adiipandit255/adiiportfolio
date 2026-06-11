import React, { useEffect, useRef } from "react";

const AtmosphereBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let mouseX = null, mouseY = null;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(250, Math.floor(window.innerWidth / 8));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1.5,
          speedX: (Math.random() - 0.5) * 1.2,
          speedY: (Math.random() - 0.5) * 1.2,
          color: `hsl(${Math.random() * 60 + 200}, 75%, 55%)`,
          alpha: Math.random() * 0.5 + 0.3,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    let time = 0;

    const draw = () => {
      if (!ctx) return;
      
      time += 0.008;
      
      // Clear the canvas to keep it transparent so drifting CSS auroras show through
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles with glow and pulse effect
      particles.forEach(particle => {
        const pulseScale = 0.8 + Math.sin(time * 2 + particle.pulse) * 0.3;
        const radius = particle.radius * pulseScale;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        
        // Glow effect
        ctx.shadowBlur = 12;
        ctx.shadowColor = particle.color;
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Mouse interaction - repulsion
        if (mouseX !== null && mouseY !== null) {
          const dx = particle.x - mouseX;
          const dy = particle.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            const angle = Math.atan2(dy, dx);
            const force = (120 - distance) / 120;
            particle.x += Math.cos(angle) * force * 2.5;
            particle.y += Math.sin(angle) * force * 2.5;
          }
        }
        
        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
      });

      // Draw connections between nearby particles (neural network effect)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.12)';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      ctx.shadowBlur = 0;
      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = null;
      mouseY = null;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    resizeCanvas();
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Drifting Aurora Background Blobs */}
      <div className="fixed inset-0 overflow-hidden -z-[60] pointer-events-none bg-[#030008]">
        {/* Aurora 1 - Cyan/Teal */}
        <div className="absolute top-[-15%] left-[-15%] w-[60vw] h-[60vw] min-w-[350px] min-h-[350px] rounded-full bg-cyan-500/10 blur-[130px] animate-drift-slow" />
        
        {/* Aurora 2 - Purple/Magenta */}
        <div className="absolute bottom-[-15%] right-[-15%] w-[70vw] h-[70vw] min-w-[450px] min-h-[450px] rounded-full bg-purple-500/10 blur-[140px] animate-drift-medium" />

        {/* Aurora 3 - Pink/Fuchsia */}
        <div className="absolute top-[25%] left-[20%] w-[55vw] h-[55vw] min-w-[400px] min-h-[400px] rounded-full bg-pink-500/8 blur-[120px] animate-drift-fast" />
      </div>

      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-50"
        style={{ display: 'block', pointerEvents: 'none' }}
      />
    </>
  );
};

export default AtmosphereBackground;