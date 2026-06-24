import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f4ff] px-4">
      <h1 className="text-6xl font-extrabold text-heading mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-dark mb-2">Page Not Found</h2>
      <p className="text-body mb-6 text-center">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="btn-primary">
        Go Home
      </Link>
    </div>
  );
}
