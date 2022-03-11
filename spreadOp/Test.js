let marks = [40, 50, 60, 70, 80];

let a = [];
for (mark of marks) {
    a.push(mark)
}
a[0] = 45;
console.log(marks)
console.log(a)