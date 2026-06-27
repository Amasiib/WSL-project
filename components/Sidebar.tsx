'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; 

type Tab = 'home' | 'contribute' | 'rewards';

interface SidebarProps {
  activeTab: Tab;
  onNavigate: (tab: Tab) => void;
}

export default function Sidebar({ activeTab, onNavigate }: SidebarProps) {
  const router = useRouter(); // تعريف الـ router

  const handleLogout = () => {
    router.push('/dashboard');
  };

  return (
    <aside className="w-72 bg-[#1a0a1e] border-l border-white/5 flex flex-col justify-between p-8 z-20 relative h-full">
      <div className="space-y-12">
        <div className="flex flex-col items-center justify-center pt-4 pb-6 border-b border-white/5">
          <img 
            src="/wsl.png" 
            alt="WSL" 
            className="h-35 w-auto object-contain mb-2" 
            onError={(e) => { e.currentTarget.src = "https://placehold.co/160x80/d5e2e2/005953?text=WSL"; }} 
          />
          <span className="text-xs font-bold text-[#e3f3d6]">حجٌ مستدام في ظل الرحمن</span>
        </div>

        <nav className="space-y-4">
          {['home', 'contribute', 'rewards'].map((tab) => (
            <button 
              key={tab}
              onClick={() => onNavigate(tab as Tab)} 
              className={`w-full text-right py-4 px-5 rounded-xl text-sm font-bold transition-all duration-300 
                ${activeTab === tab 
                  ? 'bg-[#e3f3d6]/10 text-[#e3f3d6] border-r-4 border-[#e3f3d6] shadow-[0_0_15px_rgba(227,243,214,0.1)]' 
                  : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
            >
              {tab === 'home' ? 'الرئيسية' : tab === 'contribute' ? 'ساهم معنا' : 'مكافآتك'}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto">
        <button 
          onClick={() => router.push('/')} 
          className="w-full flex items-center justify-center gap-3 py-4 px-4 rounded-xl text-sm font-bold text-red-400 bg-red-950/30 hover:bg-red-900/50 transition-all border border-red-900/30"
        >
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}