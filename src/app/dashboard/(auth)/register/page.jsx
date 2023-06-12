export default function Register() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="uppercase text-4xl font-bold mb-10">register</h1>

      <form className="flex flex-col w-full gap-y-4">
        <input
          type="text"
          placeholder="username"
          className="w-full px-4 py-2 bg-gray-200 placeholder:text-gray-400 rounded-md outline-green-500"
        />
        <input
          type="email"
          placeholder="email"
          className="w-full px-4 py-2 bg-gray-200 placeholder:text-gray-400 rounded-md outline-green-500"
        />
        <input
          type="password"
          placeholder="password"
          className="w-full px-4 py-2 bg-gray-200 placeholder:text-gray-400 rounded-md outline-green-500"
        />
        <button className="text-sm uppercase font-semibold bg-green-500 text-white px-4 py-2 rounded-md">
          login
        </button>
      </form>
    </div>
  );
}
