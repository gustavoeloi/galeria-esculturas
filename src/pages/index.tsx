import { sculptureList } from "./data";
import { useState } from "react";

export default function Home() {
  // let index = 0;
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handleShowClick() {
    setShowMore(!showMore);
  }

  // function handleClick() {
  //   if (index < sculptureList.length - 1) {
  //     setIndex(index + 1);
  //   } else {
  //     setIndex(0);
  //   }
  // }

  // function handlePrevClick() {
  //   if (index > 0) {
  //     setIndex(index - 1);
  //     // console.log(sculptureList.length - 1);
  //   } else {
  //     setIndex(sculptureList.length - 1);
  //   }

  let sculpture = sculptureList[index];
  return (
    <div>
      <div className="border-2 border-opacity-5 p-4 w-80 flex flex-col items-center mx-auto my-8 shadow-xl">
        <h2 className="text-lg">
          <i>{sculpture.name}</i>
          <br />
          <span className="text-base text-gray-400">
            {" "}
            by {sculpture.artist}
          </span>
        </h2>

        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>

        <button
          onClick={handleShowClick}
          className="shadow p-2 my-2 bg-blue-400 rounded text-zinc-100 w-40 text-sm"
        >
          {showMore ? "Hide" : "Show"} details
        </button>

        <img
          src={sculpture.url}
          alt={sculpture.alt}
          className="my-4 rounded-md w-full"
        />

        {showMore && (
          <p className="my-4 font-sans text-base">{sculpture.description}</p>
        )}

        <div className="grid grid-cols-2 gap-4 ">
          <button
            onClick={handlePrevClick}
            className="bg-teal-800 text-base text-white shadow p-2 rounded-lg w-200"
            disabled={!hasPrev}
          >
            Previous
          </button>
          <button
            onClick={handleNextClick}
            className="bg-green-500 text-base text-white shadow p-2 rounded-lg w-200"
            disabled={!hasNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
