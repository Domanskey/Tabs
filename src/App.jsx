import { useState } from "react";
import "./index.css";

export default function App() {
  const [openTab, setOpenTab] = useState("First");
  const [tabValues, setTabValues] = useState({
    First: 0,
    Second: 0,
    Third: 0,
    Fourth: 0,
  });

  function addValueToTab(amount) {
    setTabValues((prev) => ({
      ...prev,
      [openTab]: prev[openTab] + amount,
    }));
  }

  const tabs = {
    First: {
      id: "first-tab",
      increaser: 1,
      title: "Super interesting clickbait title!",
      description:
        "This text should be very funny, but unfortunately is lame af. My writing skills are below average humain being or even a dog.",
      buttonText: "Clicker!",
      ending: "Yeah, I'll better finish that cringe conversation.",
    },
    Second: {
      id: "second-tab",
      increaser: 2,
      title: "Mind-blowing content ahead!",
      description:
        "I tried to write something deep and meaningful here, but my brain is currently running on 2% battery and a single Cheeto.",
      buttonText: "Giver!",
      ending: "I’m literally just typing to fill the space at this point.",
    },
    Third: {
      id: "third-tab",
      increaser: 3,
      title: "Breaking: Local dev gives up!",
      description:
        "This paragraph was meant to be a masterpiece of modern literature. Instead, it’s just a collection of random words.",
      buttonText: "Masher!!",
      ending: "Expectations were low, but I still managed to disappoint.",
    },
    Fourth: {
      id: "fourth-tab",
      increaser: 4,
      title: "The ultimate clicker experience!",
      description:
        "If you think this UI looks bad, you should see my social life. Writing this was the highlight of my entire week, sadly.",
      buttonText: "Click-o-matic!",
      ending: "Please don't show this to anyone who knows me IRL.",
    },
  };

  return (
    <div
      aria-label="tablist"
      role="tablist"
      className="border rounded-xl p-4 sm:px-7 md:px-10 min-w-80 max-w-3xl sm:text-lg md:text-xl max-[388px]:min-h-93 max-[474px]:min-h-87 max-[522px]:min-h-81"
    >
      <Heading name={openTab} tabs={tabs} changeTab={setOpenTab}></Heading>

      <Tab
        key={openTab}
        name={openTab}
        tabs={tabs}
        value={tabValues[openTab]}
        setValue={addValueToTab}
      ></Tab>
    </div>
  );
}

function Heading({ name, tabs, changeTab }) {
  return (
    <nav className="flex flex-row justify-start gap-3 mb-4 sm:gap-5 md:gap-6">
      {Object.keys(tabs).map((element) => {
        if (element === name)
          return (
            <button
              key={tabs[element].id}
              className="cursor-pointer p-1 border-b-2"
            >
              {element}
            </button>
          );
        else
          return (
            <button
              key={tabs[element].id}
              className="text-gray-400 cursor-pointer p-1 border-b-2 border-transparent"
              onClick={() => changeTab(element)}
            >
              {element}
            </button>
          );
      })}
    </nav>
  );
}

function Tab({ name, tabs, value, setValue }) {
  return (
    <article className="flex flex-col gap-2">
      <h1>{tabs[name].title}</h1>
      <p>{tabs[name].description}</p>
      <button
        className="bg-neutral-950 text-stone-50 w-full rounded-xl cursor-pointer h-24 sm:h-36 md:h-48"
        onClick={() => setValue(tabs[name].increaser)}
      >
        {name} {tabs[name].buttonText} {value}
      </button>
      <p>{tabs[name].ending}</p>
    </article>
  );
}
