import Link from "next/link";

const NavbarItemData = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 border-b-2 shadow-md bg-white z-10">
      <div className="mx-auto max-w-6xl py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Lama Blog</h1>
        <div className="flex justify-between items-center gap-4">
          {NavbarItemData.map((item) => {
            return (
              <Link href={item.url} className="font-semibold">
                {item.title}
              </Link>
            );
          })}

          <Link
            href="/dashboard/login"
            className="uppercase font-semibold text-xs px-4 py-2 bg-green-600 text-white rounded-md shadow-sm"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
