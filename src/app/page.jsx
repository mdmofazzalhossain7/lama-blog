import Image from "next/image";
import Link from "next/link";
import Hero from "public/hero.png";
export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex justify-center gap-x-[100px]">
        <div className="flex-1">
          <h1 className="text-5xl font-bold heroTitle">
            Better design for your digital product
          </h1>
          <p className="text-lg my-4 font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            excepturi cum ab quisquam id. Tenetur illum obcaecati explicabo
          </p>
          <Link
            href="/portfolio"
            className="px-4 py-2 text-white bg-green-600 font-semibold rounded-md shadow-md"
          >
            See our works
          </Link>
        </div>
        <Image
          src={Hero}
          alt="hero"
          className="flex-1 w-[400px] h-full object-cover"
        />
      </div>
    </div>
  );
}
