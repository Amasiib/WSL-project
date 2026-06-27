export default function DashboardLayout({ children }: { children: React.ReactNode }) {
 
  return (
    <div className="h-screen w-full bg-[#f4f7f6]">
      {children}
    </div>
  );
}