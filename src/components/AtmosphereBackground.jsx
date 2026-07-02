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
        // Bright HSL colors for light contrast
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 4 + 2, // Larger particles
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          color: `hsl(${Math.random() * 80 + 190}, 95%, 65%)`, // Vibrant neon blues, cyans, purples
          alpha: Math.random() * 0.7 + 0.3,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    let time = 0;

    const draw = () => {
      if (!ctx) return;
      
      time += 0.01;
      
      // Transparent clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles with glowing radial circles
      particles.forEach(particle => {
        const pulseScale = 0.8 + Math.sin(time * 2.5 + particle.pulse) * 0.4;
        const radius = particle.radius * pulseScale;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        
        // Dynamic Glow
        ctx.shadowBlur = 18;
        ctx.shadowColor = particle.color;
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Mouse repulsion
        if (mouseX !== null && mouseY !== null) {
          const dx = particle.x - mouseX;
          const dy = particle.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 140) {
            const angle = Math.atan2(dy, dx);
            const force = (140 - distance) / 140;
            particle.x += Math.cos(angle) * force * 3;
            particle.y += Math.sin(angle) * force * 3;
          }
        }
        
        // Wrap around borders
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
      });

      // Connect particles with network lines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)'; // Brighter blue lines
      ctx.lineWidth = 1.0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 110) {
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
      {/* Interactive Light Glowing Background */}
      <div className="fixed inset-0 overflow-hidden -z-[60] pointer-events-none bg-[#0a051d] transition-colors duration-1000">
        
        {/* Style injection for smooth slow drift animations */}
        <style>{`
          @keyframes glowDrift1 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(120px, -80px) scale(1.2); }
          }
          @keyframes glowDrift2 {
            0%, 100% { transform: translate(0px, 0px) scale(1.1); }
            50% { transform: translate(-100px, 140px) scale(0.9); }
          }
          @keyframes glowDrift3 {
            0%, 100% { transform: translate(0px, 0px) scale(0.95); }
            50% { transform: translate(80px, 100px) scale(1.15); }
          }
          .animate-glow-drift-1 {
            animation: glowDrift1 25s ease-in-out infinite;
          }
          .animate-glow-drift-2 {
            animation: glowDrift2 28s ease-in-out infinite;
          }
          .animate-glow-drift-3 {
            animation: glowDrift3 22s ease-in-out infinite;
          }
        `}</style>

        {/* Aurora 1 - Cyan/Teal (Brighter & Larger) */}
        <div className="absolute top-[-10%] left-[-10%] w-[65vw] h-[65vw] min-w-[400px] min-h-[400px] rounded-full bg-gradient-to-tr from-cyan-400/22 to-blue-500/10 blur-[120px] animate-glow-drift-1" />
        
        {/* Aurora 2 - Purple/Magenta (Brighter & Larger) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[75vw] h-[75vw] min-w-[500px] min-h-[500px] rounded-full bg-gradient-to-tr from-purple-500/25 to-pink-500/10 blur-[130px] animate-glow-drift-2" />

        {/* Aurora 3 - Pink/Neon Fuchsia (Brighter & Larger) */}
        <div className="absolute top-[20%] left-[15%] w-[60vw] h-[60vw] min-w-[450px] min-h-[450px] rounded-full bg-gradient-to-br from-pink-500/20 to-indigo-500/5 blur-[110px] animate-glow-drift-3" />
      </div>

      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none"
        style={{ display: 'block' }}
      />
    </>
  );
};

export default AtmosphereBackground;