const compose = (...fns) =>
    (arg) =>
        fns.reduce((arg, fn) => fn(arg),
            arg)

module.export = { compose }