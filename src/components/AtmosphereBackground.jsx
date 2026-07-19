import React, { useEffect, useRef, useState } from "react";

const AtmosphereBackground = () => {
  const canvasRef = useRef(null);
  const [template, setTemplate] = useState(() => {
    return localStorage.getItem("portfolio_bg_template") || "aurora";
  });

  useEffect(() => {
    const handleTemplateChange = () => {
      setTemplate(localStorage.getItem("portfolio_bg_template") || "aurora");
    };

    window.addEventListener("portfolio-bg-change", handleTemplateChange);
    return () => {
      window.removeEventListener("portfolio-bg-change", handleTemplateChange);
    };
  }, []);

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
      const density = template === "stardust" ? 6 : 8;
      const particleCount = Math.min(200, Math.floor(window.innerWidth / density));
      
      for (let i = 0; i < particleCount; i++) {
        if (template === "aurora") {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1.5,
            speedX: (Math.random() - 0.5) * 1.0,
            speedY: (Math.random() - 0.5) * 1.0,
            color: `hsl(${Math.random() * 60 + 180}, 95%, 65%)`, // cyans & blues
            pulse: Math.random() * Math.PI * 2,
          });
        } else if (template === "stardust") {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.8 + 0.6, // Smaller twinkling stars
            speedX: (Math.random() - 0.5) * 0.2, // Drifting very slowly
            speedY: (Math.random() - 0.5) * 0.2,
            color: "#ffffff",
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.02 + 0.005,
          });
        } else if (template === "cyberwave") {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height, // Start above
            length: Math.random() * 12 + 6, // Vertical line length
            speedY: Math.random() * 1.5 + 0.8, // Slow falling rain
            color: `rgba(57, 255, 20, ${Math.random() * 0.4 + 0.2})`, // Green trailing rain
            width: Math.random() * 1.2 + 0.8,
          });
        }
      }
    };

    let time = 0;

    const draw = () => {
      if (!ctx) return;
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (template === "aurora") {
        // Draw networking particles
        particles.forEach(p => {
          const pulseScale = 0.8 + Math.sin(time * 2 + p.pulse) * 0.3;
          const radius = p.radius * pulseScale;
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.fillStyle = p.color;
          ctx.fill();
          
          p.x += p.speedX;
          p.y += p.speedY;

          // Wrap borders
          if (p.x < -10) p.x = canvas.width + 10;
          if (p.x > canvas.width + 10) p.x = -10;
          if (p.y < -10) p.y = canvas.height + 10;
          if (p.y > canvas.height + 10) p.y = -10;
        });

        // Connection lines
        ctx.shadowBlur = 0;
        ctx.strokeStyle = "rgba(0, 229, 255, 0.08)";
        ctx.lineWidth = 0.8;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      } else if (template === "stardust") {
        // Twinkling stars drawing
        particles.forEach(p => {
          p.pulse += p.pulseSpeed;
          const glow = 0.2 + (Math.sin(p.pulse) + 1) * 0.4;
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fillStyle = `rgba(255, 255, 255, ${glow})`;
          ctx.fill();

          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < -10) p.x = canvas.width + 10;
          if (p.x > canvas.width + 10) p.x = -10;
          if (p.y < -10) p.y = canvas.height + 10;
          if (p.y > canvas.height + 10) p.y = -10;
        });
      } else if (template === "cyberwave") {
        // Matrix style falling cyber code rain
        ctx.shadowBlur = 4;
        particles.forEach(p => {
          ctx.beginPath();
          ctx.strokeStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.lineWidth = p.width;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y + p.length);
          ctx.stroke();

          p.y += p.speedY;
          if (p.y > canvas.height) {
            p.y = -p.length - 10;
            p.x = Math.random() * canvas.width;
          }
        });
      }

      ctx.shadowBlur = 0;
      animationId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [template]);

  // Set the base dark color based on active template
  const backgroundConfigs = {
    aurora: {
      baseBg: "bg-[#0a051d]",
      aurora1: "from-cyan-400/35 to-blue-500/15 blur-[120px] animate-glow-drift-1",
      aurora2: "from-purple-500/35 to-pink-500/15 blur-[130px] animate-glow-drift-2",
      aurora3: "from-pink-500/30 to-indigo-500/10 blur-[110px] animate-glow-drift-3",
    },
    stardust: {
      baseBg: "bg-[#020008]",
      aurora1: "from-indigo-950/20 to-blue-900/10 blur-[140px] animate-glow-drift-1",
      aurora2: "from-fuchsia-950/20 to-purple-900/10 blur-[150px] animate-glow-drift-2",
      aurora3: "from-blue-950/15 to-transparent blur-[120px] animate-glow-drift-3",
    },
    cyberwave: {
      baseBg: "bg-[#000803]",
      aurora1: "from-emerald-950/25 to-teal-900/10 blur-[120px] animate-glow-drift-1",
      aurora2: "from-green-950/20 to-emerald-900/10 blur-[130px] animate-glow-drift-2",
      aurora3: "from-teal-950/15 to-transparent blur-[110px] animate-glow-drift-3",
    }
  };

  const current = backgroundConfigs[template] || backgroundConfigs.aurora;

  return (
    <>
      {/* Background blobs container */}
      <div className={`fixed inset-0 overflow-hidden -z-20 pointer-events-none ${current.baseBg} transition-colors duration-1000`}>
        
        {/* Keyframe drift animation injections */}
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
          .animate-glow-drift-1 { animation: glowDrift1 25s ease-in-out infinite; }
          .animate-glow-drift-2 { animation: glowDrift2 28s ease-in-out infinite; }
          .animate-glow-drift-3 { animation: glowDrift3 22s ease-in-out infinite; }
        `}</style>

        {/* Glow blobs */}
        <div className={`absolute top-[-10%] left-[-10%] w-[65vw] h-[65vw] min-w-[400px] min-h-[400px] rounded-full bg-gradient-to-tr ${current.aurora1}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[75vw] h-[75vw] min-w-[500px] min-h-[500px] rounded-full bg-gradient-to-tr ${current.aurora2}`} />
        <div className={`absolute top-[20%] left-[15%] w-[60vw] h-[60vw] min-w-[450px] min-h-[450px] rounded-full bg-gradient-to-br ${current.aurora3}`} />
      </div>

      {/* Particle overlay */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        style={{ display: 'block' }}
      />
    </>
  );
};

export default AtmosphereBackground;