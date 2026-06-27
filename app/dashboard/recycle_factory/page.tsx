'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, CartesianGrid, AreaChart, Area } from 'recharts';

export default function RecyclingFactoryDashboard() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('لوحة العمليات');

  const supplyChainData = [
    { day: 'سبت', incoming: 400, processed: 380 },
    { day: 'أحد', incoming: 500, processed: 480 },
    { day: 'اثنين', incoming: 300, processed: 320 },
    { day: 'ثلاثاء', incoming: 600, processed: 550 },
  ];

  const allOrders = [
    { id: 'ORD-882', type: 'بلاستيك', weight: '1200 كجم', status: 'جاري التدوير', action: 'فرز أولي', priority: 'عالية', date: '26 يونيو' },
    { id: 'ORD-883', type: 'سماد عضوي', weight: '850 كجم', status: 'مكتمل', action: 'تعبئة نهائية', priority: 'متوسطة', date: '25 يونيو' },
    { id: 'ORD-884', type: 'بلاستيك', weight: '400 كجم', status: 'بانتظار الإجراء', action: 'فحص جودة', priority: 'عالية', date: '27 يونيو' },
    { id: 'ORD-885', type: 'معادن', weight: '300 كجم', status: 'بانتظار الإجراء', action: 'تعقيم', priority: 'عالية', date: '27 يونيو' },
    { id: 'ORD-886', type: 'ورق', weight: '500 كجم', status: 'بانتظار الإجراء', action: 'فرز أولي', priority: 'متوسطة', date: '27 يونيو' },
    { id: 'ORD-887', type: 'بلاستيك', weight: '900 كجم', status: 'بانتظار الإجراء', action: 'فحص جودة', priority: 'عالية', date: '27 يونيو' },
    { id: 'ORD-888', type: 'عضوي', weight: '200 كجم', status: 'بانتظار الإجراء', action: 'معالجة حرارية', priority: 'منخفضة', date: '27 يونيو' },
    { id: 'ORD-889', type: 'معادن', weight: '600 كجم', status: 'بانتظار الإجراء', action: 'تخزين', priority: 'عالية', date: '27 يونيو' },
    { id: 'ORD-890', type: 'ورق', weight: '450 كجم', status: 'بانتظار الإجراء', action: 'فحص جودة', priority: 'متوسطة', date: '27 يونيو' },
    { id: 'ORD-891', type: 'بلاستيك', weight: '700 كجم', status: 'بانتظار الإجراء', action: 'تعقيم', priority: 'عالية', date: '27 يونيو' },
    { id: 'ORD-892', type: 'عضوي', weight: '350 كجم', status: 'بانتظار الإجراء', action: 'تعبئة', priority: 'متوسطة', date: '27 يونيو' },
    { id: 'ORD-893', type: 'بلاستيك', weight: '500 كجم', status: 'بانتظار الإجراء', action: 'فرز أولي', priority: 'عالية', date: '27 يونيو' },
  ];

  return (
    <div className="flex h-screen bg-[#1a0a1e] text-white/90 antialiased font-rawiya" dir="rtl">
      {/* Sidebar  */}
      <aside className="w-72 bg-[#1a0a1e] border-l border-white/5 flex flex-col justify-between p-8 z-20 relative h-full">
        <div className="space-y-12">
          <div className="pt-4 pb-6 border-b border-white/5 flex flex-col items-center">
            <img src="/wsl.png" alt="WSL" className="h-35 w-auto object-contain mb-2" onError={(e) => { e.currentTarget.src = "https://placehold.co/160x80/d5e2e2/005953?text=WSL"; }} />
            <span className="text-xs font-bold text-[#e3f3d6]">حجٌ مستدام في ظل الرحمن</span>
          </div>
          <nav className="space-y-4">
            {['لوحة العمليات', 'إدارة المخزون والطلبات', 'تحليلات الاستدامة', 'تقارير الجودة'].map(item => (
              <button key={item} onClick={() => setActivePage(item)}
                className={`w-full text-right py-4 px-5 rounded-xl text-sm font-bold transition-all ${activePage === item ? 'bg-[#e3f3d6]/10 text-[#e3f3d6] border-r-4 border-[#e3f3d6]' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
                {item}
              </button>
            ))}
          </nav>
        </div>
        <button onClick={() => router.push('/')} className="w-full py-4 rounded-xl text-sm font-bold text-red-400 bg-red-950/30 hover:bg-red-900/50 transition-all border border-red-900/30">
         تسجيل الخروج
        </button>
      </aside>

      <main className="flex-1 p-10 overflow-y-auto bg-gradient-to-b from-[#240e29]/30 to-[#1a0a1e]">
        {/* Header نظيف   */}
        <header className="mb-10 border-b border-white/5 pb-6">
            <h1 className="text-4xl font-black text-[#e3f3d6]">{activePage}</h1>
        </header>

        {activePage === 'لوحة العمليات' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-4 gap-6">
              {[ {l:'سعة المعالجة الحالية', v:'88%', sub:'+5% عن الأمس'}, {l:'طاقة التخزين', v:'12.4 طن', sub:'متبقي 4 طن'}, {l:'جودة المخرجات', v:'99.2%', sub:'ضمن المعايير'}, {l:'استهلاك الطاقة', v:'1.2 Mw', sub:'تحت التوقعات'} ].map((item, i) => (
                <div key={i} className="bg-[#240e29]/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-lg">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">{item.l}</p>
                  <h2 className="text-3xl font-black mt-3 text-[#e3f3d6]">{item.v}</h2>
                  <p className="text-emerald-400 font-bold text-xs mt-2">{item.sub}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#240e29]/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-lg">
              <h3 className="font-black text-lg mb-6 text-[#e3f3d6]">معدل تدفق الشحنات والمعالجة</h3>
              <div className="h-80"><ResponsiveContainer width="100%" height="100%"><AreaChart data={supplyChainData}><defs><linearGradient id="colorInc" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#e3f3d6" stopOpacity={0.3}/><stop offset="95%" stopColor="#e3f3d6" stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" /><XAxis dataKey="day" stroke="#ffffff40" /><Tooltip contentStyle={{backgroundColor: '#1a0a1e', borderColor: '#e3f3d6'}} /><Area type="monotone" dataKey="incoming" stroke="#e3f3d6" fill="url(#colorInc)" /><Area type="monotone" dataKey="processed" stroke="#b3a5b8" fill="#b3a5b820" /></AreaChart></ResponsiveContainer></div>
            </div>
          </div>
        )}

        {activePage === 'إدارة المخزون والطلبات' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-3 gap-6">
                {[ {l:'إجمالي الشحنات اليوم', v:'42 شحنة'}, {l:'سعة المخزون المستخدمة', v:'74%'}, {l:'طلبات بانتظار الإجراء', v:`${allOrders.filter(o => o.status === 'بانتظار الإجراء').length} طلب`} ].map((item, i) => (
                    <div key={i} className="bg-[#240e29]/60 p-6 rounded-3xl border border-white/10">
                        <p className="text-xs text-white/40 font-bold mb-2">{item.l}</p>
                        <h2 className="text-2xl font-black text-[#e3f3d6]">{item.v}</h2>
                    </div>
                ))}
            </div>
            <div className="bg-[#240e29]/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-lg">
                <div className="flex justify-between items-center mb-8"><h3 className="font-black text-xl text-[#e3f3d6]">سجل الطلبات التشغيلي</h3><button className="bg-[#e3f3d6] text-[#1a0a1e] px-6 py-2 rounded-xl font-black text-xs hover:opacity-90 transition">تصدير التقرير</button></div>
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                    {allOrders.map((order) => (
                        <div key={order.id} className="grid grid-cols-6 items-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#e3f3d6]/30 transition">
                            <span className="font-black text-sm text-[#e3f3d6]">{order.id}</span>
                            <span className="font-bold text-sm text-white/70">{order.type}</span>
                            <span className="font-bold text-sm text-emerald-400">{order.weight}</span>
                            <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${order.status === 'بانتظار الإجراء' ? 'bg-amber-500' : 'bg-emerald-500'}`}></span><span className="font-bold text-sm text-white/80">{order.status}</span></div>
                            <span className="text-sm text-indigo-300">{order.action}</span>
                            <div className="text-left"><span className="text-[10px] font-bold bg-white/10 px-3 py-1 rounded-full text-white/60">{order.priority}</span></div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        )}

        {activePage === 'تحليلات الاستدامة' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-4 gap-6">
              {[ {l:'كربون مُخفّض', v:'1,200', u:'طن'}, {l:'طاقة مُستردة', v:'450', u:'MWh'}, {l:'مياه مُعاد تدويرها', v:'5.4', u:'ألف م3'}, {l:'نفايات مُحوّلة', v:'98', u:'%'} ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-[#005953] to-[#013532] text-white p-6 rounded-3xl border border-white/10 shadow-lg"><p className="text-[10px] font-black opacity-60 uppercase tracking-widest">{item.l}</p><h2 className="text-3xl font-black mt-2">{item.v} <span className="text-sm font-bold opacity-80">{item.u}</span></h2></div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 bg-[#240e29]/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-lg">
                <h3 className="font-black text-lg mb-6 text-[#e3f3d6]">مؤشرات الأداء البيئي مقابل الإنتاج</h3>
                <div className="h-80"><ResponsiveContainer width="100%" height="100%"><BarChart data={[{n:'بلاستيك', p:70, s:85}, {n:'ورق', p:50, s:60}, {n:'معادن', p:90, s:95}, {n:'عضوي', p:85, s:80}]}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" /><XAxis dataKey="n" stroke="#ffffff40" /><Tooltip contentStyle={{backgroundColor: '#1a0a1e', borderColor: '#e3f3d6'}} /><Bar dataKey="p" fill="#ffffff20" radius={[10,10,0,0]} /><Bar dataKey="s" fill="#e3f3d6" radius={[10,10,0,0]} /></BarChart></ResponsiveContainer></div>
              </div>
              <div className="bg-[#240e29]/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-lg flex flex-col justify-center text-center">
                  <div className="text-6xl font-black text-[#e3f3d6] mb-4">2027</div>
                  <p className="text-sm font-bold text-white/70">من المتوقع خفض الانبعاثات بنسبة <span className="text-[#e3f3d6] font-black">22%</span> إضافية.</p>
              </div>
            </div>
          </div>
        )}

        {activePage === 'تقارير الجودة' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-[#240e29]/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-lg col-span-1">
                <h3 className="font-black text-lg mb-6 text-[#e3f3d6]">مؤشر المطابقة العام</h3>
                <div className="h-48 flex items-center justify-center"><div className="text-5xl font-black text-[#e3f3d6]">99.2%</div></div>
              </div>
              <div className="bg-[#240e29]/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-lg col-span-2">
                <h3 className="font-black text-lg mb-6 text-[#e3f3d6]">تحليل أسباب الرفض (الطلبات المتعثرة)</h3>
                <div className="space-y-4">
                  {[ {label:'شوائب غير عضوية', p:12}, {label:'رطوبة عالية', p:8}, {label:'حجم غير متناسق', p:5} ].map((e, i) => (
                    <div key={i}><div className="flex justify-between text-xs font-bold mb-2"><span className="text-white/70">{e.label}</span><span className="text-[#e3f3d6]">{e.p}%</span></div><div className="w-full bg-white/5 rounded-full h-2"><div className="bg-rose-500 h-full rounded-full" style={{width: `${e.p*5}%`}}></div></div></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#240e29]/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-lg">
              <h3 className="font-black text-lg mb-6 text-[#e3f3d6]">سجل عمليات التدقيق (Audit Trail)</h3>
              <table className="w-full text-right"><thead className="text-white/40 text-xs font-black uppercase border-b border-white/10"><tr className="pb-4"><th className="pb-4">رقم الطلب</th><th className="pb-4">تاريخ الفحص</th><th className="pb-4">نسبة النقاء</th><th className="pb-4">الحالة</th></tr></thead><tbody className="divide-y divide-white/5">{[ {id:'QA-2026-01',d:'25 يونيو', p:'99.8%', s:'معتمد'}, {id:'QA-2026-02',d:'24 يونيو', p:'97.5%', s:'مراجعة'} ].map((row, i) => (<tr key={i} className="font-bold text-sm text-white/80"><td className="py-4">{row.id}</td><td className="py-4">{row.d}</td><td className="py-4 text-emerald-400">{row.p}</td><td className="py-4">{row.s}</td></tr>))}</tbody></table>
            </div>
          </div>
        )}
      </main>
      <style jsx global>{` @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; } `}</style>
    </div>
  );
}