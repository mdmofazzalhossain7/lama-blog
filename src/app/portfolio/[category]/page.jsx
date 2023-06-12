import Image from "next/image";

export default function Category({ params }) {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold capitalize">{params.category}</h2>
      <article className="flex h-[300px] items-center even:flex-row-reverse my-4">
        <div className="w-full h-full p-4 flex flex-col justify-center">
          <h1 className="text-xl font-bold">Title of the post goes here</h1>
          <p className="text-sm font-semibold my-2">
            Description of the post gose here
          </p>
          <button className="text-xs uppercase font-semibold px-4 py-2 rounded-md bg-green-500 text-white  shadow-md w-fit">
            See more
          </button>
        </div>
        <div className="h-full w-full relative">
          <Image
            src="https://images.pexels.com/photos/17002099/pexels-photo-17002099/free-photo-of-the-golden-gate-bridge-in-fog-san-francisco-california-united-states.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
            className="rounded-md object-cover"
          />
        </div>
      </article>
    </div>
  );
}
