import "./globals.css";

export const metadata = {
  title: "Muhammad Munir | Full Stack Developer",
  description:
    "Portfolio of Muhammad Munir  Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
