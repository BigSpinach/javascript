function avgFn() {
    [].sort.call(arguments, function (a, b) {
        return a - b;
    });
    [].shift.call(arguments);
    [].pop.call(arguments);
    return (eval([].join.call(arguments, '+')) / arguments.length).toFixed(2);
}
console.log(avgFn(9.8, 9.6, 9, 8, 8.8, 8.9));











