'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AinUnifiedDashboard() {
  const [activePage, setActivePage] = useState('مركز القيادة');
  const router = useRouter();
  
  type FilterState = {
    geo: string | null;
    type: string | null;
    time: string | null;
    team: string | null;
  };

  const [activeFilter, setActiveFilter] = useState<FilterState>({
    geo: null,
    type: null,
    time: null,
    team: null
  });

  const toggleFilter = (category: keyof FilterState, value: string) => {
    setActiveFilter(prev => ({ 
      ...prev, 
      [category]: prev[category] === value ? null : value 
    }));
  };

  const tableData = [ {n:'شركة النقل المتقدم', o:'1,200', a:'0.2%', e:'99%', cat: 'المنطقة الجغرافية'}, {n:'أسطول العاصمة للنظافة', o:'850', a:'1.5%', e:'92%', cat: 'نوع النفايات'}, {n:'مصنع التدوير الوطني', o:'420', a:'0.0%', e:'98%', cat: 'كفاءة الفريق'} ];
  
  const filteredRows = activeFilter.geo || activeFilter.type || activeFilter.time || activeFilter.team
    ? tableData.filter(r => (activeFilter.geo && r.cat === 'المنطقة الجغرافية') || (activeFilter.type && r.cat === 'نوع النفايات') || (activeFilter.team && r.cat === 'كفاءة الفريق'))
    : tableData;

  return (
    <div className="flex h-screen bg-[#0f0511] text-white font-rawiya" dir="rtl">
      {/* القائمة الجانبية  */}
      <aside className="w-72 bg-[#1a0a1e] border-l border-white/5 flex flex-col justify-between p-8 z-20 relative h-full">
        <div>
          <div className="flex flex-col items-center justify-center pt-4 pb-12 border-b border-white/5 mb-8">
            <img 
              src="/wsl.png" 
              alt="WSL Logo" 
              className="h-32 w-auto object-contain mb-4" 
              onError={(e) => { e.currentTarget.src = "https://placehold.co/160x80/d5e2e2/005953?text=Logo"; }} 
            />
            <span className="text-sm font-bold text-[#e3f3d6]/60">حجٌ مستدام في ظل الرحمن  </span>
          </div>
          <nav className="space-y-4">
            {['مركز القيادة', 'تتبع المساهمات', 'التقارير السيادية'].map(item => (
              <button key={item} onClick={() => setActivePage(item)} 
                className={`w-full text-right p-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-3 ${activePage === item ? 'bg-[#e3f3d6]/10 text-[#e3f3d6] border-r-4 border-[#e3f3d6] shadow-[0_0_15px_rgba(227,243,214,0.1)]' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
                {item}
              </button>
            ))}
          </nav>
        </div>
        
        <button 
          onClick={() => router.push('/')}
          className="w-full flex items-center justify-center gap-3 py-4 px-4 rounded-xl text-sm font-bold text-red-400 bg-red-950/30 hover:bg-red-900/50 transition-all border border-red-900/30"
        >
          تسجيل خروج
        </button>
      </aside>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 p-12 overflow-y-auto">
        
        {activePage === 'مركز القيادة' && (
            <div className="bg-[#1a0a1e] border border-white/5 rounded-3xl p-6 mb-8">
                <h2 className="text-lg font-black text-[#e3f3d6]">مرحباً بك في مركز قيادة عَيـن الرقابي 👋</h2>
                <p className="text-base text-white/60 mt-1">نظرة عامة على كافة العمليات الميدانية والمؤشرات السيادية للتحكم في استدامة المشاعر.</p>
            </div>
        )}
        
        {/* مركز القيادة  */}
        {activePage === 'مركز القيادة' && (
          <div className="space-y-6">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8 bg-[#1a0a1e] rounded-3xl p-4 border border-white/5 h-[500px] relative overflow-hidden">
                <h3 className="text-emerald-400 font-black text-base mb-4 z-10 relative">خريطة العمليات الحيوية (Live GIS Map - High Density)</h3>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="animate-ping absolute h-4 w-4 rounded-full bg-rose-500 opacity-75" style={{top: '30%', left: '40%'}}></span>
                    <span className="absolute h-3 w-3 rounded-full bg-rose-500 border border-white" style={{top: '30%', left: '40%'}}></span>
                    <span className="animate-pulse absolute h-3 w-3 rounded-full bg-emerald-400" style={{top: '55%', left: '65%'}}></span>
                    <span className="absolute h-2 w-2 rounded-full bg-emerald-500" style={{top: '55%', left: '65%'}}></span>
                    <span className="animate-ping absolute h-4 w-4 rounded-full bg-amber-500 opacity-75" style={{top: '65%', left: '25%'}}></span>
                    <span className="absolute h-3 w-3 rounded-full bg-amber-500 border border-white" style={{top: '65%', left: '25%'}}></span>
                    <span className="animate-pulse absolute h-3 w-3 rounded-full bg-blue-400" style={{top: '20%', left: '70%'}}></span>
                    <span className="absolute h-2 w-2 rounded-full bg-blue-500" style={{top: '20%', left: '70%'}}></span>
                    <span className="absolute text-white text-xs font-bold" style={{top: '25%', left: '40%'}}>منى (تكدس)</span>
                    <span className="absolute text-white text-xs font-bold" style={{top: '50%', left: '65%'}}>عرفات (آمن)</span>
                    <span className="absolute text-white text-xs font-bold" style={{top: '70%', left: '25%'}}>مزدلفة (عمليات)</span>
                </div>
              </div>
              <div className="col-span-4 space-y-6">
                <div className="bg-[#1a0a1e] p-6 rounded-3xl border border-white/5">
                  <p className="text-white/60 font-bold text-sm uppercase">مؤشر التوتر اللحظي (System Stress)</p>
                  <h2 className="text-5xl font-black text-rose-500 mt-2">74%</h2>
                </div>
                <div className="bg-[#1a0a1e] p-6 rounded-3xl border border-white/5">
                  <h4 className="font-black text-lg mb-4">شريط الإنذار المبكر</h4>
                  <div className="space-y-3">
                    {['حاوية منى ممتلئة 98%', 'شاحنة بانتظار مسار: عرفات', 'تنبيه: سرعة الرياح', 'تحديث: تدفق بيانات الفرز'].map((a, i) => <div key={i} className="text-sm font-bold p-3 bg-white/5 rounded-lg border-r-4 border-amber-500">{a}</div>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[{l:'مستوى الامتلاء العام', v:'62%'}, {l:'زمن استجابة الشاحنات', v:'14 دقيقة'}, {l:'حالة الطرق المفتوحة', v:'94%' }].map((k,i) => (
                <div key={i} className="bg-[#1a0a1e] p-6 rounded-3xl border border-white/5">
                  <p className="text-sm text-white/60 font-black uppercase">{k.l}</p>
                  <h4 className="text-2xl font-black mt-2 text-[#e3f3d6]">{k.v}</h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* تتبع المساهمات  */}
        {activePage === 'تتبع المساهمات' && (
          <div className="space-y-6">
            <div className="bg-[#1a0a1e] p-8 rounded-3xl border border-white/5 shadow-sm">
              <h3 className="font-black text-xl mb-6">مصفوفة الأداء التشاركي للشركاء</h3>
              <table className="w-full text-sm font-bold">
                <thead><tr className="text-white/60 text-sm uppercase border-b border-white/5"><th className="pb-4 text-right">الشركة المشغلة</th><th className="pb-4">عدد العمليات</th><th className="pb-4">معدل التغيب</th><th className="pb-4">الامتثال البيئي</th></tr></thead>
                <tbody className="divide-y divide-white/5">
                  {filteredRows.map((row, i) => (
                    <tr key={i}><td className="py-5">{row.n}</td><td className="py-5">{row.o}</td><td className="py-5">{row.a}</td><td className="py-5 text-emerald-500">{row.e}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#1a0a1e] p-8 rounded-3xl border border-white/5 shadow-sm">
                <h3 className="font-black mb-8">رسم تدفق النفايات (Real-time Flow)</h3>
                <div className="flex items-end justify-between h-40 gap-2 px-4">
                    {[40, 70, 45, 90, 60].map((h, i) => (<div key={i} className="w-12 bg-emerald-500 rounded-t-lg transition-all" style={{height: `${h}%`}}></div>))}
                </div>
                <div className="flex justify-between mt-4 text-xs font-black text-white/60 px-2"><span>التجميع</span> <span>الفرز</span> <span>النقل</span> <span>التدوير</span> <span>الردم</span></div>
              </div>
              <div className="bg-[#1a0a1e] p-8 rounded-3xl border border-white/5 shadow-sm">
                <h3 className="font-black mb-6">فلتر الأداء التخصصي</h3>
                <div className="grid grid-cols-2 gap-4">
                    {[ {c:'geo' as keyof FilterState, l:'المنطقة الجغرافية'}, {c:'type' as keyof FilterState, l:'نوع النفايات'}, {c:'time' as keyof FilterState, l:'الفترة الزمنية'}, {c:'team' as keyof FilterState, l:'كفاءة الفريق'} ].map((f, i) => (
                        <button key={i} onClick={() => toggleFilter(f.c, f.l)}
                        className={`p-4 rounded-xl text-sm font-black border transition ${activeFilter[f.c] ? 'bg-[#e3f3d6] text-[#0f0511] border-[#e3f3d6]' : 'bg-white/5 text-white/80 border-white/10'}`}>
                        {f.l}
                        </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. التقارير السيادية  */}
        {activePage === 'التقارير السيادية' && (
          <div className="space-y-6">
            <div className="grid grid-cols-4 gap-6">
              {[ {l:'تحويل النفايات', v:'88.5%', desc:'تحسن بنسبة 4.2%'}, {l:'الربط التشغيلي', v:'96.2%', desc:'الهدف المستهدف 98%'}, {l:'الأثر الكربوني', v:'142 طن', desc:'مكافئ لـ 500 شجرة'}, {l:'الامتثال العام', v:'99.1%', desc:'خالٍ من المخالفات'} ].map((k,i) => (
                <div key={i} className="bg-[#1a0a1e] p-6 rounded-3xl border border-white/5 shadow-sm">
                    <p className="text-white/60 font-bold text-xs uppercase mb-1">{k.l}</p>
                    <h2 className="text-2xl font-black text-[#e3f3d6]">{k.v}</h2>
                    <p className="text-xs font-bold text-white/60 mt-2">{k.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#1a0a1e] p-8 rounded-3xl border border-white/5 shadow-sm">
                <h3 className="font-black text-xl mb-6">التقرير التحليلي لأداء الشركاء التشغيلي</h3>
                <table className="w-full text-sm font-bold">
                    <thead className="text-white/60 text-sm border-b border-white/5"><tr className="text-right"><th className="pb-4">الجهة</th><th className="pb-4">الحجم</th><th className="pb-4">التكلفة</th><th className="pb-4">الامتثال</th><th className="pb-4">الحالة</th></tr></thead>
                    <tbody>
                    {[ {n: 'شركة النظافة (أ)', w: '12,400', c: '85 ر.س', p: '99%', s:'مستقر'}, {n: 'أسطول النقل (ب)', w: '8,900', c: '92 ر.س', p: '95%', s:'مراقبة'} ].map((row, i) => (
                        <tr key={i} className="border-b border-white/5 last:border-0"><td className="py-5">{row.n}</td><td className="py-5 text-emerald-500">{row.w}</td><td className="py-5">{row.c}</td><td className="py-5">{row.p}</td><td className="py-5"><span className="bg-white/5 px-3 py-1 rounded-full">{row.s}</span></td></tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#1a0a1e] p-8 rounded-3xl border border-white/5">
                    <h3 className="font-black text-emerald-400 mb-6">مصفوفة المخاطر التنبؤية (AI)</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-white/5 pb-4"><span className="text-base">احتمالية تكدس منى</span> <span className="text-rose-400 font-black">مرتفعة</span></div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-4"><span className="text-base">استقرار محطات الفرز</span> <span className="text-emerald-400 font-black">عالي</span></div>
                        <div className="flex justify-between items-center pb-4"><span className="text-base">جاهزية أسطول الطوارئ</span> <span className="text-amber-400 font-black">متوسط</span></div>
                    </div>
                </div>
                <div className="bg-[#1a0a1e] p-8 rounded-3xl border border-white/5 shadow-sm">
                    <h3 className="font-black text-xl mb-6">سجل الإجراءات السيادية</h3>
                    <div className="space-y-4">{['تفعيل مسار طوارئ لشركة (ب) - ٠٤:٠٠ م', 'إعادة توجيه ٥ شاحنات إلى منطقة عرفات - ٠٣:١٥ م'].map((s,i) => <div key={i} className="bg-white/5 p-4 rounded-xl border-r-4 border-emerald-500 font-black text-sm">{s}</div>)}</div>
                </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}