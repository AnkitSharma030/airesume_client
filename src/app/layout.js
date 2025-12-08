import "./globals.css";
import ToastProvider from "../components/ToastProvider";

export const metadata = {
  title: "AI Resume Analyzer",
  description: "AI-Powered Resume Analysis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts Sansation */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sansation:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            font-family: 'Sansation', sans-serif;
          }
        `}</style>
      </head>
      <body className="antialiased bg-gray-100 text-gray-900">
        {/* Toast notifications */}
        <ToastProvider />
        {/* ✅ Navbar */}
        <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white p-4 flex justify-between">
          <nav className=" space-x-4">
          </nav>
        </header>

        {/* ✅ Main layout with sidebar */}
        <div className="flex">
          {/* Page content */}
          <main className="flex-1 ">
            {children}
          </main>
        </div>
      </body>
    </html >
  );
}
