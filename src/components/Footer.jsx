import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center text-white bg-slate-900 py-2 gap-2">
      <h1 className="text-sm">© 2023 Your Lama Blog. All rights reserved.</h1>
      <p className="flex text-xs gap-x-2">
        <Link href="/contact">Contact Us</Link>|
        <Link href="/portfolio">Portfolio</Link>|<Link href="/blog">Blog</Link>
      </p>
    </div>
  );
}
