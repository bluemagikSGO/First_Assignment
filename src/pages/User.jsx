import { useState } from "react";

function User() {
  const [count, setCount] = useState(0);

  function Add() {
    setCount(count + 1);
  }
  function Remove() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function Reset() {
    setCount(0);
  }
  return (
    <div className="p-[400px] flex gap-9 items-center">
      <button
        onClick={Add}
        className="bg-green-400 text-white p-6 border-2 border-black hover:bg-green-200 rounded-md text-2xl"
      >
        add +
      </button>
      <button
        onClick={Remove}
        className="bg-red-500 text-white p-6 border-2 border-black hover:bg-red-300 rounded-md text-2xl"
      >
        remove -
      </button>
      =<span className="text-3xl">{count}</span>
      {count > 0 && (
        <button
          onClick={Reset}
          className="block bg-blue-500 text-white p-1 border-2 border-black hover:bg-blue-300 rounded-md text-2xl"
        >
          Reset
        </button>
      )}
    </div>
  );
}
export default User;
