const asyncHandler = (fn) => {
  return function asyncUtilWrap(...args) {
    const fnReturn = fn(...args)
    const next = args[args.length - 1]
    return Promise.resolve(fnReturn).catch(next)
  }
}

module.exports = asyncHandler

// It's actually comes to understanding the closure in Javascript. When you call asyncHandler and pass the "fn" argument to it, it actually returns a callable function that will work as a common Express controller function, therefore will have req, res, and next as common arguments. asyncHandler itself is just a function returning other function. For example

// const controller = function(req, res, next) {
//   // do some stuff
// }
// counts wrappedController = asyncHander(controller)
// router.use('/', wrappedController)
// You basically wrap your controller function into another one, so when asyncHandler gets called it returns other common function, but saves some variables - controller in that case ("fn" argument), into closure. When you trigger '/' and wrappedController gets called it just calls previously saved variable - controller function taking it from closure.
