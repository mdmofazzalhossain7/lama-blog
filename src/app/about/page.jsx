import Image from "next/image";

export default function About() {
  return (
    <div className="w-screen">
      <div className="max-w-5xl mx-auto flex flex-col gap-y-2">
        <div className="h-[200px] w-full relative">
          <Image
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-0 text-white bg-slate-700 m-2 p-2 rounded-md w-5/12">
            <h1 className="uppercase text-lg font-bold">Digital Storyteller</h1>
            <p className="text-xs">
              Digital story telling is a method where a person can tell the
              digial improvements of a product
            </p>
          </div>
        </div>

        <div className="flex justify-center my-6 gap-x-4 ">
          <div className="flex-1">
            <h1 className="uppercase text-xl font-bold">Who are we?</h1>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus illum voluptatibus in quos sunt? Ullam magni veniam
              dignissimos possimus fugit, rem sapiente corporis, esse quisquam
              quos et laborum consectetur placeat. Quos ipsum cumque est error
              eligendi facere minima sapiente excepturi explicabo? Animi
              excepturi temporibus velit numquam nemo optio soluta mollitia
              iusto odio dolore? Beatae ex error vel eaque. Fugit, error. Eum
              deleniti illum, quidem neque distinctio praesentium fugiat ipsa
              repellendus iusto non! Accusantium necessitatibus nulla error
              aliquam architecto reiciendis expedita, molestiae, explicabo ad
              odit atque
            </p>
          </div>
          <div className="flex-1">
            <h1 className="uppercase text-xl font-bold">What we do?</h1>
            <p className="text-sm mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto commodi nobis illo quos, nesciunt similique ad dolore
              temporibus, at ratione quod nemo fuga, quam quis cumque rerum iste
              provident numquam. Omnis, necessitatibus est? Nobis quisquam aut
              voluptatum, iste ipsa repellat quidem? Quas temporibus consectetur
              ipsam numquam, ipsa recusandae velit minima eos assumenda maiores
              incidunt quaerat fugiat nesciunt aut facilis asperiores!
              Exercitationem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
