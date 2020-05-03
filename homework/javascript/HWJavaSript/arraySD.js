var array = [1, 2, 3, 4, 5];
var sum = 0;
var avg = 0;
var tmp = 0;
var tmp1 = 0;
var step = 0;
var result =0;
for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
    avg = sum / array.length;
}

for (i = 0; i < array.length; i++) {
    tmp = (Math.pow((array[i]- avg),2));
    tmp1 += tmp;
}

step = tmp1 / array.length;
result = Math.sqrt(step);
console.log(result);
