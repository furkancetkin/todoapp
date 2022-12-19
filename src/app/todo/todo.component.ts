import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  message: string = "";
  displayAll: boolean = false;
  inputText: string = "";

  constructor() {
    this.model.items = this.getItemsFromLS();
  }

  model = new Model();

  // private name: string = 'Furkan';
  // // items = [
  // //   "item 1", "item 2", "item 3", "item 4"
  // // ];

  // items: TodoItem[] = [
  //   {description: "breakfast", action: "yes"},
  //   {description: "exercise", action: "yes"},
  //   {description: "shopping", action: "no"},

  //   // new TodoItem("breakfast", "yes"),
  //   // new TodoItem("exercise", "no"),
  //   // new TodoItem("shopping", "no"),
  // ];

  addItem() {
    if (this.inputText != "") {
      let data = { description: this.inputText, action: false };
      this.model.items.push(data);

      let items = this.getItemsFromLS();
      items.push(data);
      localStorage.setItem("items", JSON.stringify(items));
      this.inputText = "";
    } else {
      alert("Please write a description");
    }
  }

  getItemsFromLS(){
    let items: TodoItem[] = [];
    let value = localStorage.getItem("items");
    if(value != null){
      items = JSON.parse(value);
    }
    return items;
  }

  onActionChanged(item: TodoItem){
    let items = this.getItemsFromLS();

    localStorage.clear();
    items.forEach(i => {
      if(i.description == item.description){
        i.action = item.action;
      }
    })
    localStorage.setItem("items", JSON.stringify(items));
  }

  getName() {
    return this.model.name;
  }

  getItems() {
    if (this.displayAll) {
      return this.model.items;
    } else {
      return this.model.items.filter(i => !i.action)
    }
  }

  displayCount() {
    return this.model.items.filter(i => i.action).length
  }

  getBtnClasses() {
    return { 'disabled': !this.inputText, 'btn-secondary': !this.inputText, 'btn-primary': this.inputText }
  }

}
