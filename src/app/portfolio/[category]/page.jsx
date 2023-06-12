import Image from "next/image";
import { notFound } from "next/navigation";
import { items } from "./data";

function getData(category) {
  const res = items[category];

  if (res) return res;

  return notFound();
}

export default function Category({ params }) {
  const category = params.category;
  const data = getData(category);

  return (
    <div className="">
      <h2 className="text-2xl font-semibold capitalize">{category}</h2>

      {data.map(({ id, title, description, imageUrl }) => {
        return (
          <article
            key={id}
            className="flex h-[300px] items-center even:flex-row-reverse my-4"
          >
            <div className="w-full h-full p-4 flex flex-col justify-center">
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="text-sm font-semibold my-2">{description}</p>
              <button className="text-xs uppercase font-semibold px-4 py-2 rounded-md bg-green-500 text-white  shadow-md w-fit">
                See more
              </button>
            </div>
            <div className="h-full w-full relative">
              <Image
                src={imageUrl}
                fill={true}
                className="rounded-md object-cover"
              />
            </div>
          </article>
        );
      })}
    </div>
  );
}
