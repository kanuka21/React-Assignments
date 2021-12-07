            const square = x => x*x;
const double = x => x*2;
const compose = (f, fs) => x => f(fs(x));

let f = compose(square, double)
document.write(f(5)); //100
document.write("<br>");
let f2 = compose(double, square)
document.write(f2(5)); //50
