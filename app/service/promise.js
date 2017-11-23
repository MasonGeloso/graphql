class PromiseWrapper {
    constructor(fn, args) {
        this.fn = fn;
        this.args = args;
        this.resolve = null;
        this.reject = null;
    }

    _injectPromisedFnCallback(args, callback) {
        return Array.prototype.push.call(args, callback);
    }

    _promiseCallback(err, result) {
        if (err) {
            console.error(err);
            this.reject(err);
        } else {
            this.resolve(result);
        }
    }

    execute() {
        this._injectPromisedFnCallback(this.args, this._promiseCallback.bind(this));
        const promiseHandler = function(resolve, reject) {
            this.resolve = resolve;
            this.reject = reject;
            
            try {
                this.fn.apply(null, this.args);
            } catch (e) {
                console.error(err);
                reject(e);
            }
        };

        return new Promise(promiseHandler.bind(this));
    }
}

exports.execute = function(promisedFn, ...promisedFnArgs) {
    const promiseWrapper = new PromiseWrapper(promisedFn, promisedFnArgs);
    return promiseWrapper.execute();
};
