import "./globals.css";

export const metadata = {
  title: "My Next App",
  description: "Using Sansation font",
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
        {/* ✅ Navbar */}
        <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white p-4 flex justify-between">
          <h1 className="font-extrabold text-xl">AI Resume Analyser
          </h1>
          <nav className=" space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
            {/* <button>Sign in</button> */}
          </nav>
        </header>

        {/* ✅ Main layout with sidebar */}
        <div className="flex">
          {/* Sidebar */}
          {/* <aside className="w-64 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white font-extrabold text-xl min-h-screen p-4">
            <ul className="space-y-6 mt-6">
              <li><a href="/" className="block hover:bg-gray-300 p-2 rounded">Dashboard</a></li>
              <li><a href="/profile" className="block hover:bg-gray-300 p-2 rounded">Profile</a></li>
              <li><a href="/settings" className="block hover:bg-gray-300 p-2 rounded">Settings</a></li>
            </ul>
          </aside> */}

          {/* Page content */}
          <main className="flex-1 ">
            {children}

            {/* <div className="mt-6 p-4 bg-yellow-100 border border-yellow-300 rounded">
              hi 👋 this is extra layout content that appears on every page
            </div> */}
          </main>
        </div>

        {/* ✅ Footer */}
      {/* <footer className="bg-[#303030] text-white p-4 text-center fixed bottom-0 left-0 w-full">
  © {new Date().getFullYear()} AI Resume Analyser | All Rights Reserved
</footer> */}

      </body>
    </html>
  );
}
