import { cloudstate } from "freestyle-sh";
@cloudstate
export class TheTodoList {
    static id = "todo-list";
    items = [];
    addItem(text) {
        const item = new TodoItem(text);
        /* @__PURE__ */ this.items.push(item);
        return item;
    }
    removeItem(id) {
        this.items = this.items.filter((item) => item.id != id);
    }
    getItems() {
        return this.items.map((item) => item.getItem());
    }
}
@cloudstate
export class TodoItem {
    text;
    id = crypto.randomUUID();
    completed = false;
    constructor(text) {
        this.text = text;
        this.text = text;
    }
    getItem() {
        return {
            id: this.id,
            text: this.text,
            completed: this.completed,
        };
    }
    toggleCompletion() {
        this.completed = !this.completed;
        return {
            completed: this.completed,
        };
    }
}
//# sourceMappingURL=todo-list.js.map