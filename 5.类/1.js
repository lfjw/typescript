"use strict";
var a;
(function (a) {
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'jw';
            this.age = 10;
        }
        return Person;
    }());
    var p1 = new Person();
})(a || (a = {}));
var b;
(function (b) {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.myname = 'jw';
            this.myname = name;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this.myname;
            },
            set: function (n) {
                this.myname = n.toUpperCase();
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    var p = new Person('jw');
    p.name = 'jw';
    console.log(p.name);
})(b || (b = {}));
// 村取器
