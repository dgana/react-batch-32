let object = {
  firstName: 'john',
  lastName: 'doe'
}

function bind() {
  return `${this.firstName} ${this.lastName}`
}

let a = bind.call(object)

console.log(a)

function Dog(name) {
  this.name = name
}

let b = new Dog('Lassie')

console.log(b.name)

function getName() {
  return 'Alex'
}

const variable = new getName()

console.log(variable)

function Dog(breed) {
  this.name = 'Lassie'
  return { breed }
}

const myDog = new Dog('Yorkie')

console.log(myDog, myDog.name)

function Person() {
  this.age = 0

  const that = this
  setInterval(function() {
    console.log(this)
    // that.age++
    // console.log(that.age)
  }, 1000)
}

const p = new Person()
