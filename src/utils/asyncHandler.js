const asyncHandler = (reqHandler) => {(req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
}
}
export { asyncHandler };













//This is also used somtimes if we want to use with try and catch block


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     }
//     catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message || "Internal Server Error",

//         });
//     }
// }
    