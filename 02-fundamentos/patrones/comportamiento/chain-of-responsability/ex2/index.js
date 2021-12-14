const DesignOne = require("./DesignOne");
const DesignTwo = require("./DesignTwo");
const DesignThree = require("./DesignThree");

const designOne = new DesignOne();
const designTwo = new DesignTwo();
const designThree = new DesignThree();

designOne.setNext(designTwo);
designTwo.setNext(designThree);

let role = 5;
const finalDesign = designOne.run(role);

console.log(finalDesign);
