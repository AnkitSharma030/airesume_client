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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
