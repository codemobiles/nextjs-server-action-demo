"use client";
import React, { useRef } from "react";
import { submitTodo } from "../_actions/todo-action";

type Props = {};

export default function TodoForm({}: Props) {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData: FormData) => {
        ref.current?.reset();
        submitTodo(formData);
      }}
      className="flex flex-col w-[300px] my-16"
    >
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
  );
}
