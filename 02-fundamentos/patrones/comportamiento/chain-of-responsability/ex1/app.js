var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Type;
(function (Type) {
    Type[Type["Basic"] = 0] = "Basic";
    Type[Type["Medium"] = 1] = "Medium";
    Type[Type["Premium"] = 2] = "Premium";
})(Type || (Type = {}));
var Mobile = /** @class */ (function () {
    function Mobile(type, price, name) {
        this._type = type;
        this._price = price;
        this._name = name;
    }
    Object.defineProperty(Mobile.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Mobile.prototype.toString = function () {
        return "".concat(this.name, ", Categor\u00EDa: ").concat(this.type, " Precio: ").concat(this.price);
    };
    return Mobile;
}());
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.setSuccessor = function (successor) {
        this._successor = successor;
    };
    return Handler;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.handleRequest = function (mobile) {
        if (this.canHandle(mobile)) {
            console.log("orden de ".concat(mobile.name, " realizada por empleado"));
        }
        else {
            this._successor.handleRequest(mobile);
        }
    };
    Employee.prototype.canHandle = function (mobile) {
        return mobile.type === Type.Basic;
    };
    return Employee;
}(Handler));
var Supervisor = /** @class */ (function (_super) {
    __extends(Supervisor, _super);
    function Supervisor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Supervisor.prototype.handleRequest = function (mobile) {
        if (this.canHandle(mobile)) {
            console.log("orden de ".concat(mobile.name, " realizada por supervisor"));
        }
        else {
            this._successor.handleRequest(mobile);
        }
    };
    Supervisor.prototype.canHandle = function (mobile) {
        return mobile.type === Type.Medium;
    };
    return Supervisor;
}(Handler));
var Ceo = /** @class */ (function (_super) {
    __extends(Ceo, _super);
    function Ceo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ceo.prototype.handleRequest = function (mobile) {
        if (this.canHandle(mobile)) {
            console.log("orden de ".concat(mobile.name, " realizada por ceo"));
        }
        else {
            this._successor.handleRequest(mobile);
        }
    };
    Ceo.prototype.canHandle = function (mobile) {
        return mobile.type === Type.Premium;
    };
    return Ceo;
}(Handler));
var client = function () {
    var iphone = new Mobile(Type.Premium, 900, "Iphone");
    var xiaomi = new Mobile(Type.Premium, 400, "Xiaomi note");
    var motoG7 = new Mobile(Type.Basic, 400, "Motorola G7");
    var phones = [];
    phones.push(iphone);
    phones.push(xiaomi);
    phones.push(motoG7);
    var employee = new Employee();
    var supervisor = new Supervisor();
    var ceo = new Ceo();
    employee.setSuccessor(supervisor);
    supervisor.setSuccessor(ceo);
    phones.forEach(function (t) { return employee.handleRequest(t); });
};
client();
