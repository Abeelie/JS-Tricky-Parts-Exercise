function curriedAdd(total) {
    this.total = total;
    if(!total) return 0;
    return function add(number) {
        if(number) {total += number; return add}
        else return total;
    }
}

module.exports = { curriedAdd };
