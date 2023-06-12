import Image from "next/image";
import Link from "next/link";

const portfolioItem = [
  {
    id: 1,
    title: "Websites",
    url: "/portfolio/websites",
    image:
      "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Applications",
    url: "/portfolio/applications",
    image:
      "https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Illustrations",
    url: "/portfolio/illustrations",
    image:
      "https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function Portfolio() {
  return (
    <>
      <p className="text-2xl font-semibold mt-2 mb-4">Choose a gallery</p>

      <div className="flex items-center gap-x-10">
        {portfolioItem.map((item) => {
          return (
            <Link href={item.url} className="relative cursor-pointer">
              <div className="w-[200px] h-[300px] relative bg-slate-800 rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  layout="fill"
                  className="border-2 border-green-500 opacity-70"
                />
              </div>
              <h1 className="absolute bottom-0 m-2 text-xl font-bold text-white z-10">
                {item.title}
              </h1>
            </Link>
          );
        })}
      </div>
    </>
  );
}
