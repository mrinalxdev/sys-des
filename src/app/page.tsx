import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>SystemGenie</div>

      <Link href={"/problems"}>
        Go To Problems
      </Link>
    </>
  );
}
