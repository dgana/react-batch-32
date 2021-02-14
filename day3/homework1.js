const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

const makeAllCaps = array => {
  return new Promise((resolve, reject) => {
    if (array instanceof Array) {
      resolve(
        array.map(x => {
          if (typeof x === 'string') {
            return x.toUpperCase()
          } else return x
        })
      )
    }
    reject('should be array data type')
  })
}

const sortWords = array => {
  return new Promise((resolve, reject) => {
    if (array instanceof Array) {
      resolve(array.sort())
    }
    reject('should be array data type')
  })
}

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then(result => console.log(result))
  .catch(error => console.log(error))

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then(result => console.log(result))
  .catch(error => console.error(error))

const fetchAll = async () => {
  try {
    const caps = await makeAllCaps(arrayOfWords)
    const sort = await sortWords(caps)
    console.log(sort)
  } catch (error) {
    console.error(error)
  }
}

fetchAll()
