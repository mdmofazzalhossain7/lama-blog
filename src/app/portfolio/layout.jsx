export default function Layout({ children }) {
  return (
    <div className="">
      <h1 className="max-w-5xl mx-auto text-6xl font-bold">Our Works</h1>
      <div className="max-w-5xl mx-auto">{children}</div>
    </div>
  );
}
