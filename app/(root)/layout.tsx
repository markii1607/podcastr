export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        {/* LEFT SIDEBAR */}
        
        {/* MAIN CONTENT */}
        {children}
        
        {/* RIGHT SIDEBAR */}
      </main>
    </div>
  );
}
