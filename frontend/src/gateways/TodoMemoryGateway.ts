import TodoList from "../entities/TodoList";
import TodoGateway from "./TodoGateway";

export default class TodoMemoryGateway implements TodoGateway {
	todos: TodoList;

	constructor () {
		this.todos = new TodoList([
			{ id: Math.random().toString(36).slice(2, 7), description: "Estudar TypeScript", done: true },
			{ id: Math.random().toString(36).slice(2, 7), description: "Fazer a prova online", done: false },
			{ id: Math.random().toString(36).slice(2, 7), description: "Cortar a grama", done: false }
		]);
	}

	async getTodos(): Promise<any> {
		return this.todos;
	}

	async addItem(item: any): Promise<any> {
		this.todos.addItem(item);
	}

	async updateItem(item: any): Promise<any> {
		this.todos.toggleDone(item);
	}

	async removeItem(id: string): Promise<any> {
		this.todos.removeItem({ id });
	}

}
