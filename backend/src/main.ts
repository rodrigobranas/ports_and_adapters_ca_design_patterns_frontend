import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const todos = [
	{ id: Math.random().toString(36).slice(2, 7), description: "Estudar TypeScript", done: true },
	{ id: Math.random().toString(36).slice(2, 7), description: "Fazer a prova online", done: false },
	{ id: Math.random().toString(36).slice(2, 7), description: "Cortar a grama", done: false }
];
app.get("/todos", function (req, res) {
	console.log("GET /todos");
	res.json(todos);
});
app.post("/todos", function (req, res) {
	todos.push(req.body);
	res.end();
});
app.delete("/todos/:id", function (req, res) {
	const todo = todos.find((todo: any) => todo.id === req.params.id);
	if (todo) {
		todos.splice(todos.indexOf(todo), 1);
	}
	res.end();
});
app.put("/todos/:id", function (req, res) {
	const todo = todos.find((todo: any) => todo.id === req.params.id);
	if (todo) {
		todo.done = req.body.done;
	}
	res.end();
});
app.listen(3000);