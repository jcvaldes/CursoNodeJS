const fs = require("fs");

class TodoList {
  constructor() {
    this.items = [];
  }

  addItem(text) {
    this.items.push(text);
  }

  removeItem(index) {
    this.items = items.splice(index, 1);
  }

  toString() {
    return this.items.toString();
  }
}

class FileManager {
  saveToFile(data, filename) {
    fs.writeFileSync(filename, data.toString());
  }

  loadFromFile(filename) {
    const data = fs.readFileSync(filename, "utf8");
    console.log(data);
  }
}

const todo1 = new TodoList();
todo1.addItem("Buy milk");
todo1.addItem("Clean room");
console.log(todo1.toString());
