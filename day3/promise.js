const doCode = text => {
  return new Promise((resolve, reject) => {
    console.log(text)
    resolve('Time to code my app')
  })
}

const sleep = text => {
  return new Promise((resolve, reject) => {
    console.log(text)
    resolve('Goes to sleep')
  })
}

const doIt = async txt => {
  try {
    const coding = await doCode(txt)
    const tidur = await sleep(coding)
    console.log(tidur)
  } catch (error) {
    console.error(error)
  }
}

doIt('start')

let another = doCode('asd')
  .then(sleep)
  .then(response => console.log(response))
  .catch(err => console.error(err))
