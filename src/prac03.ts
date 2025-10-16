import { json } from "stream/consumers";

const todo = {
  name: "TypeScriptの勉強",
  priority: 3,
  isDone: false,
  deadline: new Date(2025, 9, 11, 9, 45),
};

console.log(JSON.stringify(todo, null, 2))