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
var Students = /** @class */ (function () {
    function Students(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = "female";
        this.nationality = nationality;
    }
    Students.prototype.getNationality = function () {
        return this.nationality;
    };
    return Students;
}());
var UnderGraduates = /** @class */ (function (_super) {
    __extends(UnderGraduates, _super);
    function UnderGraduates(name, age, gender, nationality, batch, gpa) {
        var _this = _super.call(this, name, age, gender, nationality) || this;
        _this.batch = batch;
        _this.gpa = gpa;
        return _this;
    }
    return UnderGraduates;
}(Students));
;
var undergrad = new UnderGraduates("Jane Smith", 22, "female", "Canadian", 1, 3.5);
console.log(undergrad.getNationality());
