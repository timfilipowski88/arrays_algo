// Print Values and Sum

var testArr = [6,3,5,1,2,4]
var sum = []
for (let i=0; i<testArr.length; i++) {
    sum+=testArr[i];
    console.log(testArr[i], sum);
}

// After checking the solution I can't figure out why my computer is failing to render this properly. I also forgot to add the correct info to the console log. It should be console.log('val:', testArr[i], 'sum:', sum)

// I can't seem to figure this one out. 

// Multiply each value in the array by its array position

for (let i = 0; i < testArr.length; i++) {
    console.log(testArr[i] * i);
}

// After checking the solution code I realized that the question asked for a single array on one line of output. I excuted the math properly but made it into a series of single line values. 