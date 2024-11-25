// src/app/page.tsx
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


// src/app/problems/page.tsx
const Problems = () => {
    return (
      <div className="bg-slate-900 h-screen">
        <div className="p-6 flex flex-col">
          <h1 className="text-[45px] text-white font-semibold">System Design Challenges</h1>
        </div>
      </div>
    );
  };
  
  export default Problems;

  