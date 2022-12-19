import { TodoItem } from "./todoItem";

export class Model {
    name: string;
    items: TodoItem[];

    // constructor(name: string, items: TodoItem[]){
    //     this.name = name;
    //     this.items = items;
    // }

    constructor() {
        this.name = "Furkan";
        this.items = [
            { description: "breakfast", action: true },
            { description: "breakfast", action: true },
            { description: "exercise", action: false },
            { description: "shopping", action: false },
            { description: "exercise", action: true },
            { description: "exercise", action: true },
            { description: "shopping", action: true },
            { description: "breakfast", action: false },
            { description: "shopping", action: false },
            { description: "shopping", action: false },
        ]
    }
}
