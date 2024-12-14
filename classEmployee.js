class Employee {
    constructor(name,salary) {
        this.name=name;;
        this.salary=salary;
    }
}
let obj1=new Employee("jhon1",50000)
let obj2=new Employee("jhon2",85000)
let obj3=new Employee("jhon3",5000)
let obj4=new Employee("jhon4",500)
let obj5=new Employee("jhon5",1234)
let arr=[obj1,obj2,obj3,obj4,obj5];

arr.sort((a,b)=>  b.salary-a.salary).forEach(emp=> {console.log(emp.name)}
)