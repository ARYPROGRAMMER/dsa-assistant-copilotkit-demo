import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/ui/Header";

// Update fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DSA Assistant - Your Data Structures & Algorithms Companion",
  description: "Master Data Structures and Algorithms with our interactive learning platform",
  keywords: ["DSA", "Algorithms", "Data Structures", "Programming", "Learning"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "DSA Assistant",
    description: "Master Data Structures and Algorithms with AI assistance",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${inter.variable} ${plusJakarta.variable} dark scroll-smooth`}
    >
      <body className="font-sans antialiased min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100">
  
          {/* Background decoration */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-blue-500/5 to-transparent" />
          </div>
          
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow relative">
              <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
              {children}
            </main>
            <Footer />
          </div>
      
      </body>
    </html>
  );
}