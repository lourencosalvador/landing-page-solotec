import Link from "next/link";

export default function ErrorPage() {
  return (
    <main className="container">
     
      <p>Oops! Something went wrong.</p>
      <Link href="/">Return to Home</Link>
    </main>
  );
}
