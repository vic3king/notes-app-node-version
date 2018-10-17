let square = x =>   x * x
console.log(square(9))

let user = {
  name: 'Victory',
  sayHi: () => {
    console.log(arguments)
    console.log(`Hi ${this.name}`)
  },
  sayHiAlt () {
    console.log(arguments)
    console.log(`Hi ${this.name}`)
  }
}

user.sayHi(1,2,3)