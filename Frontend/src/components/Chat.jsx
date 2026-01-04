import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import "../styles/Chat.css";
import { sendMessage } from '../api/api';

const Chat = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi! I'm Manika's digital twin. Ask me anything about her skills, experience, or projects!", 
      sender: 'bot' 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() && !loading) {
      const userMessage = { 
        id: Date.now(), 
        text: input, 
        sender: 'user' 
      };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput('');
      setLoading(true);
      setError(null);

      try {
        // Prepare messages for API (convert to required format)
        const apiMessages = [
          {
            role: "user",
            content: input
          }
          ];
        // console.log('Prepared messages for API:', apiMessages);
        const response = await sendMessage(apiMessages);

        // bot response
        const botMessage = {
          id: Date.now() + 1,
          text: response.answer,
          sender: 'bot',
          reasoning: response.reasoning,
          sources: response.sources
        };

        setMessages([...updatedMessages, botMessage]);
      } catch (err) {
        console.error('Error sending message:', err);
        
        // Show error message to user
        const errorMessage = {
          id: Date.now() + 1,
          text: 'Sorry, I encountered an error. Please try again or refresh the page.',
          sender: 'bot',
          isError: true
        };
        setMessages([...updatedMessages, errorMessage]);
        setError('Failed to connect to the server. Please check your connection.');
      } finally {
        setLoading(false);
      }
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
              className={`message ${message.sender === 'user' ? 'message-user' : 'message-bot'} ${message.isError ? 'message-error' : ''}`}
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
                
                {/* Display reasoning if available */}
                {message.reasoning && (
                  <details className="message-reasoning">
                    <summary>View reasoning process</summary>
                    <p className="reasoning-content">{message.reasoning}</p>
                  </details>
                )}

                {/* Display sources if available */}
                {message.sources && message.sources.length > 0 && (
                  <div className="message-sources">
                    <strong>Sources:</strong>
                    <ul>
                      {message.sources.map((source, i) => (
                        <li key={i}>{source}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {loading && (
            <div className="message message-bot">
              <div className="message-avatar avatar-bot">
                <Bot className="avatar-icon" />
              </div>
              <div className="message-bubble bubble-bot loading-bubble">
                <Loader2 className="loading-spinner" />
                <span>Thinking...</span>
              </div>
            </div>
          )}

          {/* Error notification */}
          {error && (
            <div className="error-notification">
              <p>{error}</p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="chat-input-area">
          <div className="input-wrapper">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !loading && handleSend()}
              placeholder="Type your message..."
              className="chat-input"
              disabled={loading}
            />
            <button 
              onClick={handleSend} 
              className="chat-send"
              disabled={loading || !input.trim()}
            >
              {loading ? (
                <Loader2 className="send-icon spinning" />
              ) : (
                <Send className="send-icon" />
              )}
            </button>
          </div>
          <p className="chat-footer">
            Powered by AI • Try asking about skills, projects, or experience
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="deco-left"></div>
      <div className="deco-right"></div>
    </section>
  );
};

export default Chat;