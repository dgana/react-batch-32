class Shape {
  constructor(id, x, y) {
    this.id = id
    this.x = x
    this.y = y
  }

  move(x, y) {
    this.x += x
    this.y += y
    return {
      x: this.x,
      y: this.y
    }
  }

  getPos() {
    const { id, x, y, radius, color } = this
    return { id, x, y, radius, color }
  }
}

class Rectangle extends Shape {
  constructor(id, x, y, width, height) {
    super(id, x, y)
    this.width = width
    this.height = height
  }
}

class Circle extends Shape {
  constructor(id, x, y, radius) {
    super(id, x, y)
    this.radius = radius
  }
}

class Eye extends Circle {
  constructor(id, x, y, radius, color) {
    super(id, x, y, radius)
    this.color = color
  }

  roll(xRoll, yRoll) {
    return this.move(xRoll, yRoll)
  }
}

const myEye = new Eye(1, 2, 3, 4, 'blue')
myEye.roll(2, 2)
myEye.roll(2, 2)

console.log(myEye)
console.log(myEye.getPos())
