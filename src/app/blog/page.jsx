import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts");

  if (!res.ok) throw new Error("Failed to fetch");

  return res;
}

export default async function Blog() {
  const data = await getData();

  console.log(data);

  return (
    <div className="">
      <div className="max-w-5xl mx-auto flex flex-col gap-y-4 my-4">
        {/* {data.map((item) => {
          return (
            <Link
              key={item.id}
              href={`/blog/${item.id}`}
              className="flex gap-x-4 h-[100px] w-full items-center"
            >
              <div className="flex-1 h-full w-2/12 relative">
                <Image
                  src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  fill={true}
                  className="rounded-md object-cover"
                />
              </div>
              <header className="h-[150px] w-10/12 p-4">
                <h1 className="text-lg font-bold">{item.title}</h1>
                <p className="text-sm line-clamp-5">{item.body}</p>
              </header>
            </Link>
          );
        })} */}
      </div>
    </div>
  );
}
