"use server";
import { revalidatePath } from "next/cache";

export const submitTodo = async (formData: FormData) => {
  const message = formData.get("message");
  await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  revalidatePath("/");
};
