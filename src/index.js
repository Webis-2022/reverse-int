module.exports = function reverse (n) {
    const absoluteNum = Math.abs(n);
    const reversed = absoluteNum.toString().split('').reverse().join('');
    return Number(reversed);
}
