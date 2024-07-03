import LeftSidebar from "@/components/LeftSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        {/* LEFT SIDEBAR */}
        <LeftSidebar />
        
        {/* MAIN CONTENT */}
        <section>
          <div>
            <div>
              <Image />
              MobileNav
            </div>

            <div>
              Toasters
              {children}
            </div>
          </div>
        </section>
        
        {/* RIGHT SIDEBAR */}
      </main>
    </div>
  );
}
