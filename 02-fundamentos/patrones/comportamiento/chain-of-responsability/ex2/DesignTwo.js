const BaseDesign = require("./BaseDesign");

class DesignTwo extends BaseDesign {
  run(role) {
    if (this.isMyResponsability(role)) {
      return "DesignTwo";
    }
    return this.next(role);
  }
  // complex logic: ej validar formato de numero de cuit x pais
  isMyResponsability(role) {
    return role === 2;
  }
}

module.exports = DesignTwo;
