'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [currentRole, setCurrentRole] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentRole) {
      alert("يرجى اختيار مسار للبدء");
      return;
    }
    switch (currentRole) {
      case 'contributor': router.push('/dashboard/contributor'); break;
      case 'waste_company': router.push('/dashboard/waste_company'); break;
      case 'recycle_factory': router.push('/dashboard/recycle_factory'); break;
      case 'supervisor': router.push('/dashboard/supervisor'); break;
      default: alert("يرجى اختيار مسار صحيح");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0a1e] via-[#240e29] to-[#2c1332] flex flex-col justify-center items-center p-4 relative overflow-hidden font-rawiya" dir="rtl">
      
      {/* إضاءة */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#5b0055]/15 rounded-full filter blur-[150px] pointer-events-none" />
      
      {/* مربع الرئيسية */}
      <div className="max-w-2xl w-full z-10 flex flex-col items-center justify-center min-h-[80vh]">
        
        {/* الشعار */}
        <div className="flex justify-center items-center w-full mb-8">
          <img src="/wsl.png" alt="WSL Logo" className="w-full max-w-[380px] h-auto object-contain drop-shadow-2xl" />
        </div>

        {/* بطاقة الدخول */}
        <div className="bg-[#240e29]/40 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 p-8 md:p-10 w-full">
          <form onSubmit={handleLogin} className="space-y-8 text-right">
            <div className="border-r-4 border-[#e3f3d6] pr-4">
              <h2 className="text-lg font-bold text-[#e3f3d6] tracking-wide">اختر مسـار التشغيل من هنــا:</h2>
            </div>
            
            <div className="space-y-3">
              {[
                { id: 'contributor', title: ' ضيوف الرحمـن والمساهميـن ' },
                { id: 'waste_company', title: '  تقديـم الخدمة وإدارة النفايات' },
                { id: 'recycle_factory', title: ' شركات ومصانع إعادة التدوير ' },
                { id: 'supervisor', title: 'جهة إشرافية للمشاعر المقدسة' }
              ].map((item,  idx) => (
                <div
                  key={item.id}
                  onClick={() => setCurrentRole(item.id)}
                  className={`group cursor-pointer py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    currentRole === item.id
                      ? 'bg-[#e3f3d6]/10 border-[#e3f3d6]'
                      : 'bg-white/5 border-transparent hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-6 space-x-reverse">
                    <span className={`text-sm font-bold tracking-widest ${currentRole === item.id ? 'text-[#e3f3d6]' : 'text-white/30'}`}>
                      0{idx + 1}
                    </span>
                    <span className={`text-base font-medium transition-all ${currentRole === item.id ? 'text-[#e3f3d6] font-bold text-lg' : 'text-white/80'}`}>
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-[#e3f3d6] hover:bg-white text-[#1a0a1e] font-bold py-4 rounded-2xl transition-all duration-300 text-base tracking-wide"
            >
              سجل دخولك الآن
            </button>
          </form>
        </div>
        
        {/* الفوتر */}
        <div className="mt-8 text-[10px] text-[#e3f3d6]/20 tracking-[0.2em] font-medium uppercase">
          WASL PLATFORM • ENTERPRISE SOLUTION • 2026
        </div>
      </div>
    </div>
  );
}