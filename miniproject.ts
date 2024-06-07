class Students {
    name: string;
    age: number;
    gender: string;
    nationality: string;
    constructor(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = "female";
        this.nationality = nationality;
    }
    getNationality() {
        return this.nationality;
    }
}

class UnderGraduates extends Students implements Iundergrad {
    batch: number;
    gpa: number;
    constructor(name:string, age:number, gender:string, nationality:String, batch:number, gpa: number) {
        super(name, age, gender, nationality);
        this.batch = batch;
        this.gpa = gpa;
    }
}

interface Iundergrad {
    name: string,
    age: number,
    gender: string,
    nationality: string,
    batch: number,
    gpa: number
};

var undergrad: UnderGraduates = new UnderGraduates("Jane Smith", 22, "female", "Canadian", 1, 3.5);
console.log(undergrad.getNationality());