// class Triangle{
//     constructor(s1,s2,s3,units){
//         this.s1=s1;
//         this.s2=s2;
//         this.s3=s3;
//         this.units=units
//     }
//     calculate_perimeter=function(){
//         console.log(`the perimeter of the triangle is ${this.s1+this.s2+this.s3}${this.units}`)
//     }
//     calculate_area=function(){
//         console.log(`The area of the triangle is ${this.s1*this.s2*this.s3}${this.units}square`)
//     }
// }
// let triangle1=new Triangle(5,6,7,'cm')
// triangle1.calculate_perimeter()
// triangle1.calculate_area()
class Employee{
    constructor(name,salary){

        this.name=name;
        this.salary=salary;
    }
    sortArray=function(arr){
        for (let i = 1; i < arr.length; i++) {
            const element = arr[i];
            let j=i-1;
                while (j>=0 && arr[j].salary>element.salary) {
                    arr[j+1]=arr[j];
                    j--;
                }
                arr[j+1]=element;
        }
        return arr;
    }
}
const employees = [
    new Employee("Alice", 250),
    new Employee("Bob", 200),
    new Employee("Charlie", 300),
    new Employee("David", 180),
    new Employee("Eve", 220),
    new Employee("Frank", 210),
    new Employee("Grace", 240),
    new Employee("Heidi", 190)
];
let obj=new Employee()
employees.forEach(element => {
    console.log(`${element.name} have Rs.${element.salary} Salary `)
});
console.log(obj.sortArray(employees))
employees.forEach(element => {
    console.log(`${element.name} have Rs.${element.salary} Salary `)
});