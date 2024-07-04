import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
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
        <section className="flex min-h-screen flex-1 flex-col p-4 sm:p-14">
          <div className="mx-auto flex w-full max-w-5xlflex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
              <MobileNav />
            </div>

            <div className="flex flex-col md:pb-14">
              Toasters
              {children}
            </div>
          </div>
        </section>
        
        {/* RIGHT SIDEBAR */}
        <RightSidebar />
      </main>
    </div>
  );
}
