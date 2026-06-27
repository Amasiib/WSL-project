'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Truck, BarChart2, ScanLine, AlertTriangle, Target, Layers, Calendar, Recycle, Activity, User, FileText } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export default function WaslUnifiedSystem() {
  const [activeTab, setActiveTab] = useState('home');
  const [scannedData, setScannedData] = useState<any>(null);
  const router = useRouter();

  const handleScan = () => {
    setScannedData({
        id: 'WSL-SCAN-882',
        type: 'بلاستيك عالي الكثافة (HDPE)',
        quantity: '450kg',
        location: 'منى - ج1',
        camp: 'مخيم الحجاج رقم 42',
        recycleCenter: 'مركز إعادة تدوير المشاعر المركزي',
        appointment: 'اليوم، 14:30 م',
        status: 'مجدولة تلقائياً',
        quality: 98
    });
  };

  const data = [{ name: 'منى', value: 50 }, { name: 'عرفات', value: 30 }, { name: 'مزدلفة', value: 20 }];
  const COLORS = ['#e3f3d6', '#4a2550', '#2d1432'];

  const cards = [
    { id: 'WSL-9001', camp: 'منى - ج1', type: 'بلاستيك HD', progress: 100, status: 'مكتمل', color: 'bg-emerald-500', driver: 'محمد أحمد', weight: '450kg' },
    { id: 'WSL-9002', camp: 'عرفات - أ2', type: 'عضوي', progress: 65, status: 'جاري النقل', color: 'bg-blue-500', driver: 'سعيد القحطاني', weight: '300kg' },
    { id: 'WSL-9003', camp: 'منى - و4', type: 'معادن', progress: 30, status: 'قيد التجهيز', color: 'bg-amber-500', driver: 'عبدالله خالد', weight: '120kg' },
    { id: 'WSL-9004', camp: 'مزدلفة - ب3', type: 'بلاستيك', progress: 45, status: 'في الطريق', color: 'bg-purple-500', driver: 'سالم علي', weight: '210kg' },
    { id: 'WSL-9005', camp: 'عرفات - ج5', type: 'عضوي', progress: 10, status: 'قيد الانتظار', color: 'bg-rose-500', driver: 'خالد عمر', weight: '50kg' },
    { id: 'WSL-9006', camp: 'منى - د2', type: 'معادن', progress: 80, status: 'جاري النقل', color: 'bg-blue-500', driver: 'فهد فايز', weight: '380kg' },
    { id: 'WSL-9007', camp: 'منى - ج9', type: 'بلاستيك', progress: 100, status: 'مكتمل', color: 'bg-emerald-500', driver: 'بندر ناصر', weight: '500kg' },
    { id: 'WSL-9008', camp: 'عرفات - د1', type: 'عضوي', progress: 50, status: 'قيد التجهيز', color: 'bg-amber-500', driver: 'تركي سعد', weight: '190kg' },
  ];

  const teamResponsibility = [
    { name: 'أحمد سعد', role: 'مدير عمليات منى', status: 'مكتمل 100%' },
    { name: 'خالد ناصر', role: 'مشرف الفرز عرفات', status: 'جاري 75%' },
    { name: 'سالم علي', role: 'مراقب النقل مزدلفة', status: 'مكتمل 90%' }
  ];

  return (
    <div className="flex h-screen bg-[#0f0511] text-white font-rawiya" dir="rtl">
      {/* Sidebar الموحد */}
      <aside className="w-72 bg-[#1a0a1e] border-l border-white/5 flex flex-col justify-between p-8 z-20 relative h-full">
        <div className="space-y-12">
          <div className="flex flex-col items-center justify-center pt-4 pb-6 border-b border-white/5">
            <img src="/wsl.png" alt="WSL" className="h-35 w-auto object-contain mb-2" onError={(e) => { e.currentTarget.src = "https://placehold.co/160x80/d5e2e2/005953?text=WSL"; }} />
            <span className="text-xs font-bold text-[#e3f3d6]">حجٌ مستدام في ظل الرحمن</span>
          </div>
          <nav className="space-y-4">
            {[ {id: 'home', l: 'الرئيسية', i: ShieldCheck}, {id: 'ops', l: 'إدارة العمليات', i: Truck}, {id: 'reports', l: 'التقارير التحليلية', i: BarChart2}, {id: 'scanner', l: 'نظام الفرز الميداني', i: ScanLine} ].map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full text-right py-4 px-5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-3 ${activeTab === tab.id ? 'bg-[#e3f3d6]/10 text-[#e3f3d6] border-r-4 border-[#e3f3d6] shadow-[0_0_15px_rgba(227,243,214,0.1)]' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
                <tab.i size={18}/> {tab.l}
              </button>
            ))}
          </nav>
        </div>
        <button onClick={() => router.push('/')} className="w-full flex items-center justify-center gap-3 py-4 px-4 rounded-xl text-sm font-bold text-red-400 bg-red-950/30 hover:bg-red-900/50 transition-all border border-red-900/30">
          تسجيل الخروج
        </button>
      </aside>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 p-12 overflow-y-auto">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fadeIn">
            <h1 className="text-4xl font-black text-[#e3f3d6]">لوحة القيادة المركزية</h1>
            <div className="grid grid-cols-4 gap-6">
              {[ { l: 'معدل التدوير', v: '89.4%', i: BarChart2, c: 'text-emerald-400' }, { l: 'شاحنات نشطة', v: '24/28', i: Truck, c: 'text-blue-400' }, { l: 'بلاغات طارئة', v: '03', i: AlertTriangle, c: 'text-rose-500' }, { l: 'مخيمات مغطاة', v: '482', i: ShieldCheck, c: 'text-[#e3f3d6]' } ].map((item, i) => (
                <div key={i} className="bg-[#1a0a1e] p-8 rounded-2xl border border-white/5"><item.i className={`mb-6 ${item.c}`} size={24} /><h2 className="text-3xl font-black">{item.v}</h2><p className="text-[10px] uppercase text-white/30 mt-1">{item.l}</p></div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 bg-[#1a0a1e] p-8 rounded-2xl border border-white/5">
                <h3 className="font-bold mb-8">توزيع الكثافة التشغيلية</h3>
                <div className="h-48 flex items-center justify-center"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={data} innerRadius={60} outerRadius={80} dataKey="value">{data.map((e,i) => <Cell key={i} fill={COLORS[i]}/>)}</Pie><Tooltip/></PieChart></ResponsiveContainer></div>
              </div>
              <div className="bg-[#1a0a1e] p-8 rounded-2xl border border-white/5">
                <h3 className="font-bold mb-6 text-sm">سجل التنبيهات</h3>
                <div className="space-y-6">
                  {[ {txt: 'امتلاء حاوية - منى 4', time: 'منذ 5 دقائق'}, {txt: 'تأخير شاحنة - عرفات', time: 'منذ 12 دقيقة'}, {txt: 'صيانة طارئة - مركبة 08', time: 'منذ 25 دقيقة'}, {txt: 'تحذير حرارة - مزدلفة', time: 'منذ 40 دقيقة'}, {txt: 'طلب إخلاء سريع', time: 'منذ 50 دقيقة'}, {txt: 'تحديث مسار', time: 'ساعة واحدة'}, {txt: 'اكتشاف مخالفة فرز', time: 'ساعتان'}, {txt: 'فحص دوري', time: '3 ساعات'} ].map((a, i) => <div key={i} className="border-r-2 border-[#e3f3d6] pr-4"><p className="text-xs font-bold">{a.txt}</p><p className="text-[9px] text-white/40">{a.time}</p></div>)}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ops' && (
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-4xl font-black text-[#e3f3d6]"> تحكم العمليات</h1>
            {cards.map((card) => (
                <div key={card.id} className="bg-[#1a0a1e] p-6 rounded-2xl border border-white/10 flex items-center justify-between">
                    <div><h2 className="text-lg font-black">{card.id}</h2><p className="text-xs text-white/50">{card.camp}</p></div>
                    <div className="w-64"><div className="flex justify-between text-[10px] mb-1 font-bold"><span>{card.status}</span><span>{card.progress}%</span></div><div className="h-2 bg-black/40 rounded-full"><div className={`h-full ${card.color}`} style={{width: `${card.progress}%`}} /></div></div>
                </div>
            ))}
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="space-y-8 animate-fadeIn">
            <h1 className="text-4xl font-black text-[#e3f3d6]">مركز القيادة </h1>
            <div className="grid grid-cols-4 gap-6">
                {[ {l: 'إجمالي الحاويات', v: '1,240'}, {l: 'كفاءة المسح', v: '98%'}, {l: 'الامتثال للجدول', v: '92%'}, {l: 'نسبة التدوير', v: '85%'} ].map((card, i) => (
                    <div key={i} className="bg-[#1a0a1e] p-6 rounded-2xl border border-white/10">
                        <p className="text-[10px] text-white/50 uppercase">{card.l}</p>
                        <h2 className="text-3xl font-black mt-2">{card.v}</h2>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="bg-[#1a0a1e] p-8 rounded-3xl border border-white/10">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><User/> توزيع المسؤوليات والمهام</h3>
                    <div className="space-y-4">
                        {teamResponsibility.map((member, i) => (
                            <div key={i} className="flex justify-between items-center p-4 bg-black/30 rounded-xl">
                                <div><p className="font-bold">{member.name}</p><p className="text-[10px] text-white/50">{member.role}</p></div>
                                <span className="text-[#e3f3d6] font-bold text-xs">{member.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-[#1a0a1e] p-8 rounded-3xl border border-white/10">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><FileText/> تقرير التدفق </h3>
                    <div className="h-40"><ResponsiveContainer width="100%" height="100%"><BarChart data={[{name: 'م', v: 80}, {name: 'ث', v: 95}, {name: 'ع', v: 70}, {name: 'خ', v: 90}]}><Bar dataKey="v" fill="#e3f3d6"/></BarChart></ResponsiveContainer></div>
                </div>
            </div>
          </div>
        )}

        {activeTab === 'scanner' && (
          <div className="space-y-8 animate-fadeIn">
            <h1 className="text-4xl font-black text-[#e3f3d6]">نظام الفرز الميداني </h1>
            {!scannedData ? (
                <button onClick={handleScan} className="w-full h-80 border-4 border-dashed border-[#e3f3d6]/30 rounded-3xl flex flex-col items-center justify-center hover:bg-[#e3f3d6]/5 transition-all">
                    <ScanLine size={64} className="text-[#e3f3d6] mb-4 animate-pulse"/>
                    <p className="font-bold text-xl">اضغط لبدء المسح الضوئي للحاوية واستخراج البيانات والجدولة التلقائية</p>
                </button>
            ) : (
                <div className="grid grid-cols-2 gap-8">
                    <div className="bg-[#1a0a1e] p-8 rounded-3xl border border-[#e3f3d6]/30">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Activity/> بيانات الحاوية</h3>
                        <div className="space-y-4">
                            {Object.entries(scannedData).map(([k, v]) => k !== 'quality' && k !== 'status' && <p key={k} className="text-sm capitalize">{k}: <span className="font-bold">{String(v)}</span></p>)}
                        </div>
                    </div>
                    <div className="bg-[#1a0a1e] p-8 rounded-3xl border border-emerald-500/30">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-emerald-400"><Recycle/> جدولة التدوير</h3>
                        <div className="space-y-4">
                            <p>المركز: <span className="font-bold">{scannedData.recycleCenter}</span></p>
                            <p className="flex items-center gap-2">الموعد: <Calendar size={16}/> <span className="font-bold">{scannedData.appointment}</span></p>
                            <div className="mt-6 p-4 bg-emerald-950/20 border border-emerald-500/20 rounded-xl text-emerald-400 font-bold text-sm">تمت الجدولة بنجاح</div>
                        </div>
                    </div>
                </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}