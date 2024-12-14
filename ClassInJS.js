class Student{
    constructor(name='John',roll_no=2){
        this.name=name,
        this.roll_no=roll_no
    }
    display=function(){
        console.log(`the entered name is ${this.name} nd roll no is ${this.roll_no}`)
    }
}
var student1=new Student("sami",101)
student1.display()