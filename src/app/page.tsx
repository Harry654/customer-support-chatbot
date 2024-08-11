import Link from "next/link";

export default function Home() {
  return (
    <section className="border bg-black w-screen h-screen">
      <h1 className="text-center">
        Welcome to Silver Spoons restaurant. Choose one of our AI assistants to
        help you out with your reservatons
      </h1>
      <Link href="/chat/gemini" className="bg-blue-600 ml-10">Gemini</Link>
      <Link href="/chat/llama" className="bg-blue-600 ml-10">Llama</Link>
    </section>
  );
}
