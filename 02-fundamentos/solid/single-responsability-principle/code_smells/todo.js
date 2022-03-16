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

  save(filename) {
    fs.writeFileSync(filename, this.toString());
  }

  load(filename) {
    // Some implementation
  }
}
