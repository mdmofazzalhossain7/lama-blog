import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) return notFound();

  return res.json();
}

export default async function SinglePost({ params }) {
  const { title, body } = await getData(params.postId);

  return (
    <div className="max-w-5xl mx-auto my-10">
      <div className="flex gap-x-4 min-h-[200px]">
        <div className="flex flex-1 justify-between flex-col">
          <div className="flex flex-col gap-y-1">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-sm font-semibold">{body}</p>
          </div>
          <div className="flex items-center gap-x-2 mt-4">
            <div className="h-[50px] w-[50px]  relative">
              <Image
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                fill={true}
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-sm font-semibold">Author Name</p>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image
            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
            className="rounded-md object-cover"
          />
        </div>
      </div>

      <p className="text-sm my-4">
        {body + body + body + body + body + body + body}
      </p>
    </div>
  );
}
