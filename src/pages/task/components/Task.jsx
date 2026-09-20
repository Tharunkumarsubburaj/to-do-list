import React from "react";

export default function task() {
  return (
    <main className="w-full h-screen bg-background text-text flex justify-center items-center">
      <div className="  bg-white/10 rounded-lg flex flex-col justify-center items-center">
        <h1>To-Do List</h1>
        <form className="flex flex-col gap-4 p-8" onsubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Add a new task..."
          />
          <button
            type="submit"
            className="bg-primary text-text py-2 px-4 rounded-md hover:bg-primary/80"
          >
            Add Task
          </button>
        </form>
      </div>
    </main>
  );
}
