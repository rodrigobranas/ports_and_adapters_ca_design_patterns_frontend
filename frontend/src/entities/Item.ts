export default class Item {

	constructor (readonly id: string | null, readonly description: string, readonly done: boolean = false) {
		if (id === null) {
			this.id = Math.random().toString(36).slice(2, 7);
		}
	}
}
