const catchAsync = (controller) => {
    return (req, res, next) => {
    controller(req, res).catch((err)=> netx(err));
    }
}

module.exports = catchAsync;