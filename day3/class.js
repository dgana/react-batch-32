class Person {
  constructor(name) {
    this.name = name
  }
}

class Employee extends Person {
  constructor(name, title) {
    super(name)
    this.title = title
  }

  getEmployeeData() {
    const { name, title } = this
    console.log({ name, title })
  }
}

const adit = new Employee('Adit', 'IT Engineer')
adit.getEmployeeData()
