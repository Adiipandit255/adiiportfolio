import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PortfolioProvider } from './context/PortfolioContext'

// Global Web Audio API synthesized tap sound
const playGlobalTapSound = () => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Quick high frequency electronic tick/chirp
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(1400, audioCtx.currentTime); // High pitch tick
    osc1.frequency.exponentialRampToValueAtTime(700, audioCtx.currentTime + 0.08);
    
    gain1.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
    
    osc1.start();
    osc1.stop(audioCtx.currentTime + 0.08);

    // Warm thump backing click
    setTimeout(() => {
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(110, audioCtx.currentTime); // Low thump
      osc2.frequency.exponentialRampToValueAtTime(30, audioCtx.currentTime + 0.06);
      
      gain2.gain.setValueAtTime(0.09, audioCtx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);
      
      osc2.start();
      osc2.stop(audioCtx.currentTime + 0.06);
    }, 15);

  } catch (e) {
    // Fail silently if audio context is blocked
  }
};

// Global event listener to detect taps on all interactive elements
document.addEventListener("click", (event) => {
  const target = event.target;
  
  // Find if click target or its parent is interactive
  const isInteractive = 
    target.tagName === "BUTTON" || 
    target.tagName === "A" || 
    target.tagName === "INPUT" || 
    target.tagName === "TEXTAREA" || 
    target.tagName === "SELECT" ||
    target.closest("button") || 
    target.closest("a") || 
    target.closest("[role='button']") ||
    target.closest(".cursor-pointer") ||
    window.getComputedStyle(target).cursor === "pointer";

  if (isInteractive) {
    playGlobalTapSound();
  }
}, true); // Use capturing phase to ensure it triggers before other handlers

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </StrictMode>,
)
