'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar'; 

type Tab = 'home' | 'contribute' | 'rewards';

interface ScannedData {
  type: string;
  weight: string;
  gps: string;
  timestamp: string;
}

export default function WaslContributorDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scannedResult, setScannedResult] = useState<ScannedData | null>(null);
  
  const userProfile = {
    name: 'محمد',
    points: 3450,
    nextBadgePoints: 5000,
    badge: 'الوسام الفضي البيئي',
    rank: 'المركز الـ 12',
    totalWeight: '45.8 كجم',
    scansCount: 14
  };

  const leaderboard = [
    { id: 1, name: 'بعثة حجاج ماليزيا - مخيم 24', weight: '1,420 كجم', points: '14,200 نقطة', isTop: true },
    { id: 2, name: 'حملة الوفاء التطوعية - مشعر منى', weight: '1,180 كجم', points: '11,800 نقطة', isTop: false },
    { id: 3, name: 'مخيمات حجاج جنوب شرق آسيا - منطقة B', weight: '950 كجم', points: '9,500 نقطة', isTop: false },
    { id: 4, name: 'مجموعة أطباء الأرض المستدامة', weight: '730 كجم', points: '7,300 نقطة', isTop: false },
  ];

  const handleQRScanSimulation = () => {
    setIsScanning(true);
    setScannedResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScannedResult({
        type: 'بلاستيك عالي النقاء (PET)',
        weight: '3.2 كجم (تقريبي)',
        gps: '21.4182° N, 39.8831° E (مشعر منى - منطقة A)',
        timestamp: 'منذ ثوانٍ'
      });
    }, 2000);
  };

  return (
    <>
      <div 
        className="flex h-screen overflow-hidden bg-[#1a0a1e] text-white/90 antialiased font-rawiya relative" 
        dir="rtl"
      >
        {/* إضاءات */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#5b0055]/15 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-[#e3f3d6]/5 rounded-full filter blur-[160px] pointer-events-none" />

        {/*  القائمة الجانبية */}
        <div className="bg-[#1a0a1e] border-l border-white/5 z-20">
          <Sidebar activeTab={activeTab} onNavigate={setActiveTab} />
        </div>

        <main className="flex-1 flex flex-col overflow-y-auto bg-gradient-to-b from-[#240e29]/30 to-[#1a0a1e] relative z-10">

          <div className="p-8 max-w-5xl w-full mx-auto space-y-8">
            
            {/* TAB 1: HOME */}
            {activeTab === 'home' && (
              <div className="space-y-8 animate-fadeIn">
                {/*  الترحيب   */}
                <div className="bg-gradient-to-l from-[#240e29]/80 to-[#2c1332]/40 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-[#e3f3d6]/30 transition-all duration-500">
                  <div className="absolute -right-16 -top-16 w-40 h-40 bg-[#e3f3d6]/5 rounded-full blur-2xl group-hover:bg-[#e3f3d6]/10 transition-all duration-500" />
                  <div className="space-y-2 relative z-10">
                    <h2 className="text-2xl font-bold text-[#e3f3d6] drop-shadow-sm">تقبل الله طاعاتك، يا {userProfile.name} 👋</h2>
                    <p className="text-sm text-white/70 leading-relaxed max-w-xl">
                      أهلًا بك في منصة وَصـل، ابدأ الفرز اليوم وساهم في نظافة المشاعر المقدسة
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('contribute')}
                    className="bg-[#e3f3d6] hover:bg-white text-[#1a0a1e] font-bold py-3.5 px-7 rounded-2xl transition-all duration-300 shadow-[0_10px_25px_rgba(227,243,214,0.25)] hover:shadow-none active:scale-[0.98] text-sm whitespace-nowrap relative z-10"
                  >
                    شارك في الفرز
                  </button>
                </div>

                {/*  نيون   */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="bg-[#240e29]/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-between group hover:border-[#e3f3d6]/20 transition-all duration-300">
                    <span className="text-white/50 text-sm font-medium">رصيد نقاطك الحالي</span>
                    <span className="text-2xl font-bold text-[#e3f3d6] pt-2 drop-shadow-[0_0_10px_rgba(227,243,214,0.2)]">
                      {userProfile.points.toLocaleString()} <span className="text-xs font-normal text-white/40 mr-1">نقطة</span>
                    </span>
                  </div>
                  <div className="bg-[#240e29]/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-between group hover:border-[#e3f3d6]/20 transition-all duration-300">
                    <span className="text-white/50 text-sm font-medium">إجمالي النفايات المفروزة</span>
                    <span className="text-2xl font-bold text-[#e3f3d6] pt-2">{userProfile.totalWeight}</span>
                  </div>
                  <div className="bg-[#240e29]/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-between group hover:border-[#e3f3d6]/20 transition-all duration-300">
                    <span className="text-white/50 text-sm font-medium">عمليات المسح الناجحة</span>
                    <span className="text-2xl font-bold text-white pt-2">
                      {userProfile.scansCount} <span className="text-xs font-normal text-white/40 mr-1">مرات</span>
                    </span>
                  </div>
                </div>

                {/* بار التقدم  */}
                <div className="bg-[#240e29]/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-lg space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-white/80">تقدمك نحو الوسام القادم: <strong className="text-[#e3f3d6] font-bold">{userProfile.badge}</strong></span>
                    <span className="font-bold text-[#e3f3d6]/80">{userProfile.points} / {userProfile.nextBadgePoints} نقطة</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden p-[2px] border border-white/5">
                    <div 
                      className="h-full bg-gradient-to-l from-[#e3f3d6] to-[#b3a5b8] rounded-full transition-all duration-1000 shadow-[0_0_12px_rgba(227,243,214,0.4)]"
                      style={{ width: `${(userProfile.points / userProfile.nextBadgePoints) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-white/50">تبقّت لك {(userProfile.nextBadgePoints - userProfile.points).toLocaleString()} نقطة فقط للحصول على الترقية والوسام القادم 🏆</p>
                </div>

                {/* الأقسام  للرئيسية */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-[#240e29]/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-lg lg:col-span-2 space-y-4">
                    <h3 className="text-sm font-bold text-[#e3f3d6] border-r-4 border-[#e3f3d6] pr-3">آخر العمليات الميدانية</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-4 bg-white/5 hover:bg-white/10 rounded-xl text-sm transition-all border border-white/5">
                        <div className="space-y-0.5">
                          <p className="font-bold text-white/90">تم مسح كيس نفايات (بلاستيك)</p>
                          <p className="text-xs text-white/50">مشعر منى - مخيم 24</p>
                        </div>
                        <span className="font-bold text-[#e3f3d6]">+320 نقطة</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white/5 hover:bg-white/10 rounded-xl text-sm transition-all border border-white/5">
                        <div className="space-y-0.5">
                          <p className="font-bold text-white/90">تم مسح حاوية فرز (ورق ومقوى)</p>
                          <p className="text-xs text-white/50">مشعر منى - منطقة A</p>
                        </div>
                        <span className="font-bold text-[#e3f3d6]">+150 نقطة</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#240e29]/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-[#e3f3d6] border-r-4 border-[#e3f3d6] pr-3">ترتيبك في منى</h3>
                      <p className="text-3xl font-bold text-white pt-2 drop-shadow-md">{userProfile.rank}</p>
                      <p className="text-xs text-white/60 leading-relaxed pt-1">أنت ضمن أفضل 5% من حجاج هذا الموسم مساهمةً في الاستدامة الميدانية للفرز</p>
                    </div>
                    <button 
                      onClick={() => setActiveTab('rewards')}
                      className="w-full mt-6 bg-white/5 hover:bg-white/10 text-[#e3f3d6] border border-[#e3f3d6]/20 hover:border-[#e3f3d6]/40 font-bold py-3 rounded-xl text-xs transition-all duration-300"
                    >
                      عرض لوحة المساهمـات  📊
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CONTRIBUTE (QR SCANNER) */}
            {activeTab === 'contribute' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="bg-[#240e29]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 right-0 w-1.5 h-full bg-[#e3f3d6]" />
                  <h2 className="text-base font-bold text-[#e3f3d6] mb-1">فرز وتوثيق النفايات الذكية من المصدر</h2>
                  <p className="text-xs text-white/60 leading-relaxed">
                    اضغطي على الزر بالأسفل لمحاكاة استدعاء كاميرا الهاتف ومسح الرمز الضوئي (QR Code) الموجود على الحاويات لجلب بيانات الموك داتا الجغرافية والأوزان تلقائيًا
                  </p>
                </div>

                <div className="bg-[#240e29]/30 backdrop-blur-2xl border border-white/5 rounded-[28px] p-10 flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden min-h-[380px]">
                  
                  {!isScanning && !scannedResult && (
                    <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-[#e3f3d6] border border-white/10 mb-4 shadow-inner group-hover:scale-100 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                      </svg>
                    </div>
                  )}

                  {isScanning && (
                    <div className="flex flex-col items-center space-y-4 my-4">
                      <div className="w-32 h-32 border-2 border-[#e3f3d6] rounded-2xl relative overflow-hidden flex items-center justify-center bg-black/40 shadow-[0_0_25px_rgba(227,243,214,0.15)]">
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-500 shadow-[0_0_8px_red] animate-scanline" />
                        <span className="text-[10px] text-[#e3f3d6] font-bold tracking-widest animate-pulse">SCANNING</span>
                      </div>
                      <p className="text-sm font-medium text-white/80 animate-pulse">جاري فحص الرمز الضوئي وتوثيق السلة...</p>
                    </div>
                  )}

                  {scannedResult && (
                    <div className="w-full bg-[#240e29]/70 border border-[#e3f3d6]/20 rounded-2xl p-6 text-right space-y-4 shadow-2xl animate-fadeIn">
                      <div className="flex justify-between items-center border-b border-white/5 pb-3">
                        <span className="text-sm font-bold text-[#e3f3d6] flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          تمت قراءة بيانات السلة الميدانية بنجاح
                        </span>
                        <span className="text-xs text-white/40">{scannedResult.timestamp}</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                          <span className="text-white/40 block mb-1 text-xs">نوع النفايات</span>
                          <strong className="text-white/90 font-bold">{scannedResult.type}</strong>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                          <span className="text-white/40 block mb-1 text-xs">الوزن التقريبي</span>
                          <strong className="text-[#e3f3d6] font-bold text-base">{scannedResult.weight}</strong>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                          <span className="text-white/40 block mb-1 text-xs">إحداثيات الموقع</span>
                          <strong className="text-white/70 font-mono text-xs block truncate">{scannedResult.gps}</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  <button 
                    onClick={handleQRScanSimulation}
                    disabled={isScanning}
                    className="mt-6 bg-[#e3f3d6] hover:bg-white text-[#1a0a1e] font-bold py-3.5 px-8 rounded-xl transition-all shadow-[0_12px_30px_rgba(227,243,214,0.2)] disabled:opacity-30 text-sm"
                  >
                    {isScanning ? 'جاري القراءة...' : 'ابدأ مسح الرمز الضوئي (QR Code)'}
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: REWARDS & LEADERBOARD */}
            {activeTab === 'rewards' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#e3f3d6] border-r-4 border-[#e3f3d6] pr-3">الملف الشخصي للمساهم</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="bg-[#240e29]/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-between">
                      <span className="text-white/40 text-sm font-medium">نقاطك الحالية</span>
                      <span className="text-xl font-bold text-white pt-2">{userProfile.points.toLocaleString()}</span>
                    </div>
                    <div className="bg-[#240e29]/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-between">
                      <span className="text-white/40 text-sm font-medium">الوسام البيئي المستحق</span>
                      <span className="text-base font-bold text-[#e3f3d6] pt-2">🏅 {userProfile.badge}</span>
                    </div>
                    <div className="bg-[#240e29]/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-between">
                      <span className="text-white/40 text-sm font-medium">الترتيب العام بين الحجاج</span>
                      <span className="text-base font-bold text-[#e3f3d6] pt-2">{userProfile.rank}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#e3f3d6] border-r-4 border-[#e3f3d6] pr-3">لوحة التنافس العام (Leaderboard)</h3>
                    <p className="text-xs text-white/50 pr-3">ترتيب المخيمات والجهات الأعلى فرزًا والتزامًا بالمعايير البيئية للمشروع تنازليًا</p>
                  </div>

                  {/* جدول المتصدرين     */}
                  <div className="bg-[#240e29]/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                      <table className="w-full text-right border-collapse">
                        <thead>
                          <tr className="border-b border-white/5 text-xs font-bold text-white/40 bg-white/5">
                            <th className="py-4 px-6 text-center w-24">الترتيب</th>
                            <th className="py-4 px-6">الجهة / المخيم</th>
                            <th className="py-4 px-6">إجمالي الوزن بالكيلو جرام</th>
                            <th className="py-4 px-6">النقاط المكتسبه</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-sm text-white/80">
                          {leaderboard.map((row) => (
                            <tr key={row.id} className={`transition-colors ${row.isTop ? 'bg-[#e3f3d6]/5 hover:bg-[#e3f3d6]/10' : 'hover:bg-white/5'}`}>
                              <td className="py-4 px-6 text-center">
                                <span className={`inline-flex w-6 h-6 items-center justify-center rounded-xl font-bold text-xs ${
                                  row.id === 1 ? 'bg-[#e3f3d6] text-[#1a0a1e] shadow-[0_0_10px_rgba(227,243,214,0.3)]' :
                                  row.id === 2 ? 'bg-white/10 text-[#e3f3d6]' : 'text-white/40'
                                }`}>
                                  {row.id}
                                </span>
                              </td>
                              <td className="py-4 px-6 font-bold text-white/90">
                                {row.name}
                                {row.isTop && <span className="mr-3 text-[10px] bg-[#e3f3d6]/10 text-[#e3f3d6] border border-[#e3f3d6]/30 px-2.5 py-0.5 rounded-full font-bold">المتصدر 🔥</span>}
                              </td>
                              <td className="py-4 px-6 font-bold text-[#e3f3d6]">{row.weight}</td>
                              <td className="py-4 px-6 font-bold text-white/70">{row.points}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      <style jsx global>{`
        @keyframes scanline {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        .animate-scanline {
          animation: scanline 2.5s infinite linear;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}