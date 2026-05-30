import { useState, useRef, useEffect } from 'react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Xin chào 👋 Bạn cần hỗ trợ gì?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { id: messages.length + 1, text: input, sender: 'user' }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: 'Cảm ơn bạn! 😊 Tôi đang xử lý yêu cầu.',
        sender: 'bot'
      }]);
    }, 500);
  };

  if (!isOpen) {
    return (
      <div 
        className="ai-button"
        onClick={() => setIsOpen(true)}
      >
        🤖
      </div>
    );
  }

  return (
    <div className="ai-assistant">
      <div className="ai-header">
        🤖 AI Assistant
        <button onClick={() => setIsOpen(false)}>✕</button>
      </div>
      <div className="ai-messages">
        {messages.map(msg => (
          <div key={msg.id} className={`ai-msg ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="ai-input">
        <input 
          type="text" 
          placeholder="Nhập câu hỏi..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>📤</button>
      </div>
    </div>
  );
};

export default AIAssistant;
