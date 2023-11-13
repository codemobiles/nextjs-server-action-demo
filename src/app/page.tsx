import { revalidatePath } from "next/cache";
import React from "react";
import { submitTodo } from "./_actions/todo-action";

type Props = {};

export default async function Index({}: Props) {
  const result = await fetch("http://localhost:3000/api/todo");
  const todoList: { id: string; message: string }[] = await result.json();

  return (
    <div>
      <h1 className="text-2xl font-bold"> Todos (NextJS14 Server Action)</h1>
      <form action={submitTodo} className="flex flex-col w-[300px] my-16">
        <input
          type="text"
          name="message"
          className="px-4 py-2 mb-3"
          placeholder="Write your job..."
        />

        <button className="bg-blue-500 rounded px-4 py-2 text-white font-semibold">
          Submit
        </button>
      </form>

      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            Job {todo.id}: {todo.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
