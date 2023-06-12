import Image from "next/image";
import Form from "public/form.png";

export default function Contact() {
  return (
    <div className="">
      <h1 className="text-4xl text-center font-bold mb-12">
        Let's keep in touch
      </h1>

      <div className="max-w-5xl mx-auto flex justify-center gap-x-10">
        <div className="flex-1 h-[300px] w-full relative">
          <Image src={Form} layout="fill" objectFit="contain" className="" />
        </div>

        <form className="flex flex-col flex-1 gap-5 ">
          <input
            type="text"
            placeholder="name"
            className="px-4 py-2 bg-gray-100 rounded-md outline-green-500"
          />
          <input
            type="email"
            placeholder="email"
            className="px-4 py-2 bg-gray-100 rounded-md outline-green-500"
          />
          <textarea
            type="text"
            placeholder="message"
            rows={5}
            className="px-4 py-2 bg-gray-100 rounded-md outline-green-500"
          />
          <button className="px-4 py-1 text-sm font-semibold text-white bg-green-500 rounded-md outline-green-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
