let curry = function (abc) {
  let num = abc.length

  return function abc1(...args) {
    console.log('abc1 args', args)
    if (args.length >= num) {
      console.log('enough arguments')
      return abc(...args)
    } else {
      console.log('need more arguments')
      return function abc2(...moreArgs) {
        console.log('abc2', moreArgs)
        let newArgs = args.concat(moreArgs)
        return abc1(...newArgs)
      }
    }
  }
}
