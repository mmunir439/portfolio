import "./globals.css";

export const metadata = {
  title: "Muhammad Munir | Full Stack Developer",
  description:
    "Certified Full Stack Developer portfolio  React, Next.js, Node.js, MongoDB, and production deployments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
