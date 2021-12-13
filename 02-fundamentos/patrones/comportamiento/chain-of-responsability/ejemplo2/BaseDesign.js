class BaseDesign {
  setNext(next) {
    this._next = next;
  }
  next(role) {
    if (this._next) {
      return this._next.run(role);
    }
    return `There are not Design for role ${role}`;
  }
}
module.exports = BaseDesign;
