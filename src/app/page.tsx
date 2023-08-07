import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>{Math.random()}</div>
      <Link href="/other">Navigate away</Link>
    </>
  );
}
