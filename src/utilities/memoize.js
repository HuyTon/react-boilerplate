/*  This memoize function is the same purpose of hook useMemo,
    which is only to use inside a React function component. 
    Therefore, this function could be using inside a React 
    class component instead of hook useMemo.
    
    How to use: 
    1/ Without parameter:
    functionName = memoize(() => {
        ....
        return ...
    });

    { this.functionName() }

    2/ With a parameter:
    functionName = memoize((input) => {
        ....
        return ...
    });

    { this.functionName(this.state.input) }
*/
function memoize(fn) {
    return function () {
        var args =
            Array.prototype.slice.call(arguments)
        fn.cache = fn.cache || {};
        return fn.cache[args] ? fn.cache[args] : (fn.cache[args] = fn.apply(this, args))
    }
}

export default memoize;