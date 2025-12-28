import React, { useState } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import "../styles/Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Manika's digital twin. Ask me anything about her skills, experience, or projects!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
      setInput('');
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: Date.now(), 
          text: "Thanks for your message! This is a demo response.", 
          sender: 'bot' 
        }]);
      }, 1000);
    }
  };

  return (
    <section className="chat" id="chat">
      {/* Header with illustration */}
      <div className="chat-header">
        <div className="bot-illustration">
          <div className="bot-glow"></div>
          <div className="bot-icon">
            <Bot className="bot-svg" strokeWidth={1.5} />
            <Sparkles className="sparkle-icon" />
          </div>
        </div>
        <h1 className="chat-title">Chat with my digital twin 🤖</h1>
        <p className="chat-subtitle">Ask me anything about Manika's work and experience</p>
      </div>

      {/* Chat container */}
      <div className="chat-box">
        {/* Messages area */}
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender === 'user' ? 'message-user' : 'message-bot'}`}
            >
              <div className={`message-avatar ${message.sender === 'user' ? 'avatar-user' : 'avatar-bot'}`}>
                {message.sender === 'bot' ? (
                  <Bot className="avatar-icon" />
                ) : (
                  <User className="avatar-icon" />
                )}
              </div>
              <div className={`message-bubble ${message.sender === 'user' ? 'bubble-user' : 'bubble-bot'}`}>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="chat-input-area">
          <div className="input-wrapper">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="chat-input"
            />
            <button onClick={handleSend} className="chat-send">
              <Send className="send-icon" />
            </button>
          </div>
          <p className="chat-footer">Powered by AI • Try asking about skills, projects, or experience</p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="deco-left"></div>
      <div className="deco-right"></div>
    </section>
  );
};

export default Chat;