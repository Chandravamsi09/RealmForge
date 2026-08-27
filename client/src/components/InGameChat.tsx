import React, { useState, useRef, useEffect } from 'react';
import { useGameSocket } from '../context/GameSocketContext';
import { MessageSquare, Send, AlertTriangle, ShieldAlert, Crosshair } from 'lucide-react';

export const InGameChat: React.FC = () => {
  const { chatMessages, sendChat, sendPing } = useGameSocket();
  const [inputText, setInputText] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendChat(inputText.trim());
    setInputText('');
  };

  return (
    <div className="w-80 h-64 bg-slate-900/90 border border-slate-800 rounded-xl flex flex-col backdrop-blur-md overflow-hidden shadow-xl text-xs">
      {/* Header */}
      <div className="px-3 py-2 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-1.5 font-bold text-slate-300">
          <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
          <span>Team Dispatch</span>
        </div>
        {/* Quick Tactical Pings */}
        <div className="flex items-center space-x-1">
          <button
            onClick={() => sendPing(8, 6, 'DEFEND')}
            className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-400"
            title="Ping Defend"
          >
            <ShieldAlert className="w-3 h-3" />
          </button>
          <button
            onClick={() => sendPing(0, 5, 'ATTACK')}
            className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-rose-400"
            title="Ping Focus Fire"
          >
            <Crosshair className="w-3 h-3" />
          </button>
          <button
            onClick={() => sendPing(15, 5, 'ALERT')}
            className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-400"
            title="Ping Alert"
          >
            <AlertTriangle className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Message Stream */}
      <div className="flex-1 p-3 overflow-y-auto space-y-1.5 font-sans">
        {chatMessages.length === 0 ? (
          <div className="text-slate-500 italic text-center py-8">Squad communications online.</div>
        ) : (
          chatMessages.map((m, idx) => (
            <div key={idx} className="leading-tight">
              <span className="font-bold text-amber-400">{m.sender}: </span>
              <span className="text-slate-200">{m.message}</span>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <form onSubmit={handleSend} className="p-2 bg-slate-950/80 border-t border-slate-800 flex space-x-1.5">
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Send team message..."
          className="flex-1 bg-slate-900 border border-slate-700 rounded-md px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500 placeholder:text-slate-600"
        />
        <button
          type="submit"
          className="p-1.5 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
