import React, { useState, useRef, useEffect } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

const AIAssistant = () => {
  const { profileInfo, projects, certifications } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "bot",
      text: `Hi there! I am Aditya's AI Assistant. How can I help you today?`,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const quickQuestions = [
    { text: "What are your top skills?", query: "skills" },
    { text: "Tell me about your projects", query: "projects" },
    { text: "How can I contact you?", query: "contact" },
    { text: "Where can I find your resume?", query: "resume" },
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isTyping]);

  const handleSendMessage = async (textToSend) => {
    if (!textToSend.trim()) return;

    // Add user message
    setChatHistory((prev) => [...prev, { sender: "user", text: textToSend }]);
    setMessage("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(textToSend.toLowerCase());
      setChatHistory((prev) => [...prev, { sender: "bot", text: response }]);
      setIsTyping(false);
    }, 800);
  };

  const generateResponse = (query) => {
    // 1. Contact Info
    if (query.includes("contact") || query.includes("email") || query.includes("reach") || query.includes("phone")) {
      return `You can reach Aditya via email at ${profileInfo.email || "adityasharma22093@gmail.com"}. He is located in ${profileInfo.location || "Gwalior, India"}. You can also connect with him on LinkedIn: ${profileInfo.linkedin || "#"}.`;
    }

    // 2. Resume Info
    if (query.includes("resume") || query.includes("cv") || query.includes("biodata")) {
      return `Sure! You can view or download Aditya's official resume PDF here: ${profileInfo.resumePdf || "/resume.pdf"}.`;
    }

    // 3. Projects Info
    if (query.includes("project") || query.includes("work") || query.includes("portfolio")) {
      if (projects && projects.length > 0) {
        const projectNames = projects.map((p) => `• ${p.title}: ${p.description}`).join("\n");
        return `Here are some of Aditya's key projects:\n\n${projectNames}\n\nYou can view them in detail on the /projects page!`;
      }
      return `Aditya has worked on several AI and React applications, including Pathfinder (an AI-powered career discovery platform) and CoachFinder. You can check the projects section on the website!`;
    }

    // 4. Skills Info
    if (query.includes("skill") || query.includes("technolog") || query.includes("language") || query.includes("code")) {
      return `Aditya specializes in Artificial Intelligence and Full Stack Development. Key skills include:\n\n• Frontend: React.js, Tailwind CSS, Javascript (ES6+), HTML5/CSS3\n• Backend & Cloud: Node.js, Express, Firebase Firestore & Authentication\n• AI & Concepts: Human-Computer Interaction, Internet of Things, LLMs, and Python.`;
    }

    // 5. Certifications
    if (query.includes("certif") || query.includes("degree") || query.includes("nptel")) {
      if (certifications && certifications.length > 0) {
        const certList = certifications.slice(0, 4).map((c) => `• ${c.title} (${c.category})`).join("\n");
        return `Aditya holds multiple certifications, including:\n\n${certList}\n\nCheck out the full list under the /certifications tab.`;
      }
      return `Aditya has certifications from NPTEL in Human-Computer Interaction (Elite Gold/Silver), IoT, and Large Language Models.`;
    }

    // 6. Generic queries / Greetings
    if (query.includes("hello") || query.includes("hi") || query.includes("hey") || query.includes("greetings")) {
      return `Hello! 😊 I'm here to answer questions about Aditya's education, skills, and portfolio. What would you like to know?`;
    }

    if (query.includes("who") || query.includes("about") || query.includes("aditya")) {
      return `Aditya Sharma is a passionate student and developer working on ${profileInfo.title || "Artificial Intelligence"}. He loves building interactive web applications with modern design aesthetics, dynamic animations, and seamless database sync integrations.`;
    }

    // Fallback response
    return `Interesting question! I'm programmed to answer questions about Aditya's skills, projects, contact info, and certifications. Feel free to ask: "What are your skills?", "Show me your projects", or "How can I contact you?"`;
  };

  return (
    <>
      {/* Floating Chat Bubble Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          boxShadow: "0 0 20px var(--theme-glow-1)",
          borderColor: "rgba(var(--theme-accent-rgb-1), 0.3)",
          backgroundImage: "linear-gradient(135deg, var(--theme-accent-2), var(--theme-accent-1))",
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white border shadow-lg cursor-pointer focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Box Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              backgroundColor: "rgba(10, 5, 20, 0.9)",
              backdropFilter: "blur(20px)",
              borderColor: "var(--theme-glass-border)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
            className="fixed bottom-24 right-6 w-[350px] sm:w-[380px] h-[500px] rounded-2xl border z-50 flex flex-col overflow-hidden text-white font-sans"
          >
            {/* Header */}
            <div 
              style={{
                backgroundImage: "linear-gradient(to right, rgba(var(--theme-accent-rgb-2), 0.15), rgba(var(--theme-accent-rgb-1), 0.15))",
                borderBottomColor: "var(--theme-glass-border)"
              }}
              className="px-4 py-3.5 border-b flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <div 
                  style={{
                    backgroundImage: "linear-gradient(135deg, var(--theme-accent-2), var(--theme-accent-1))"
                  }}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                >
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">Aditya's AI Agent</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span style={{ backgroundColor: "var(--theme-accent-1)" }} className="w-1.5 h-1.5 rounded-full animate-pulse" />
                    <span className="text-[10px] text-gray-400 font-medium">Online & Ready</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none">
              {chatHistory.map((chat, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 ${
                    chat.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Avatar */}
                  <div
                    style={chat.sender === "user" ? {
                      backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                      borderColor: "rgba(255,255,255,0.1)"
                    } : {
                      backgroundImage: "linear-gradient(135deg, var(--theme-accent-2), var(--theme-accent-1))"
                    }}
                    className="w-7 h-7 rounded-full flex items-center justify-center border text-white text-xs shrink-0"
                  >
                    {chat.sender === "user" ? <User size={14} /> : <Bot size={14} />}
                  </div>

                  {/* Message Bubble */}
                  <div
                    style={
                      chat.sender === "user"
                        ? {
                            backgroundImage: "linear-gradient(to right, var(--theme-accent-2), var(--theme-accent-1))",
                            color: "#fff",
                          }
                        : {
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                            borderWidth: "1px",
                            borderColor: "var(--theme-glass-border)",
                            color: "#e2e8f0",
                          }
                    }
                    className={`px-3.5 py-2.5 rounded-2xl max-w-[75%] text-xs leading-relaxed whitespace-pre-line ${
                      chat.sender === "user"
                        ? "rounded-tr-none shadow-[0_4px_12px_rgba(var(--theme-accent-rgb-2),0.2)]"
                        : "rounded-tl-none"
                    }`}
                  >
                    {chat.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-2.5">
                  <div 
                    style={{ backgroundImage: "linear-gradient(135deg, var(--theme-accent-2), var(--theme-accent-1))" }}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0"
                  >
                    <Bot size={14} />
                  </div>
                  <div 
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "var(--theme-glass-border)" }}
                    className="px-3.5 py-2.5 rounded-2xl rounded-tl-none border flex items-center gap-1 shrink-0"
                  >
                    <span style={{ backgroundColor: "var(--theme-accent-1)" }} className="w-1.5 h-1.5 rounded-full animate-bounce delay-100" />
                    <span style={{ backgroundColor: "var(--theme-accent-2)" }} className="w-1.5 h-1.5 rounded-full animate-bounce delay-200" />
                    <span style={{ backgroundColor: "var(--theme-accent-1)" }} className="w-1.5 h-1.5 rounded-full animate-bounce delay-300" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Questions Suggestions */}
            {chatHistory.length === 1 && !isTyping && (
              <div className="px-4 pb-3 flex flex-col gap-1.5">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Suggested Questions</span>
                <div className="flex flex-wrap gap-1.5">
                  {quickQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(q.text)}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        borderColor: "var(--theme-glass-border)",
                      }}
                      className="px-2.5 py-1.5 rounded-lg border text-[10px] text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 text-left cursor-pointer"
                    >
                      {q.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(message);
              }}
              style={{ borderTopColor: "var(--theme-glass-border)" }}
              className="p-3 border-t flex items-center gap-2 bg-[#090513]/40"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-white/20 transition text-white"
              />
              <button
                type="submit"
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--theme-accent-2), var(--theme-accent-1))",
                }}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white shrink-0 hover:opacity-90 transition cursor-pointer"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
