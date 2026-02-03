import "./index.css";

export default function App() {
  return (
    <div
      aria-label="tablist"
      role="tablist"
      className="border rounded-xl p-4 sm:px-7 md:px-10 min-w-80 max-w-3xl sm:text-lg md:text-xl"
    >
      <Heading></Heading>
      <Tab></Tab>
    </div>
  );
}

function Heading() {
  return (
    <nav className="flex flex-row justify-start gap-3 mb-4 sm:gap-5 md:gap-6">
      <button className="cursor-pointer p-1 border-b-2">First</button>
      <button className="text-gray-400 cursor-pointer">Second</button>
      <button className="text-gray-400 cursor-pointer">Third</button>
      <button className="text-gray-400 cursor-pointer">Fourth</button>
    </nav>
  );
}

function Tab() {
  return (
    <article className="flex flex-col gap-2">
      <h1>Super interesting clickbait title!</h1>
      <p>
        This text should be very funny, but unfortunately is lame af. My writing
        skills are below average humain being or even a dog.
      </p>
      <button className="bg-neutral-950 text-stone-50 w-full rounded-xl cursor-pointer h-24 sm:h-36 md:h-48">
        Click!
      </button>
      <p>Yeah, I'll better finish that cringe conversation.</p>
    </article>
  );
}
