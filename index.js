function convertFarhToCelcius(fahrenheit){

    if(Array.isArray(fahrenheit)){
        return '[' + fahrenheit + '] is not a valid number but an array'
    }
    if(typeof(fahrenheit) == 'object' || typeof(fahrenheit) == null){
      //  return '[' + fahrenheit + '] is not a valid number but an object'
      return `{` + fahrenheit + `} is not a valid number but a/an object.`
    }
    let celcius = (5/9) * (fahrenheit -32)
    return celcius.toFixed(4);
}

console.log(convertFarhToCelcius(0))
console.log(convertFarhToCelcius("0"))
console.log( convertFarhToCelcius([1,2,3]))
console.log( convertFarhToCelcius({1:0}))


function checkYuGiOh(num){
    // if(typeof(num) == 'string'){
    //     return `invalid parameter: ${num}`
    let conNum = Number(num);
    if (!conNum){
        return `invalid parameter: ${num}`
    }
      
    let arr = []
    for(let i=1; i<=num; i++){
        arr.push(i)
    }
    arr.forEach(data => {
        if((data % 2 == 0) && (data % 3 == 0) && (data % 5 == 0)){
            var index = arr.indexOf(data);
            if (~index) {
                arr[index] = 'yu-gi-ho';
            }
        }
        if((data % 2 == 0) && (data % 3== 0)){
            var index = arr.indexOf(data);
            if (~index) {
                arr[index] = 'yu-gi';
            }
        }
        if((data % 2 == 0)  && (data % 5 == 0)){
            var index = arr.indexOf(data);
            if (~index) {
                arr[index] = 'yu-ho';
            }
        }
        if((data % 3 == 0)  && (data % 5 == 0)){
            var index = arr.indexOf(data);
            if (~index) {
                arr[index] = 'gi-ho';
            }
        }
        if(data % 2 == 0){
            var index = arr.indexOf(data);
            if (~index) {
                arr[index] = 'yu';
            }
        }
        if(data % 3 == 0){
            var index = arr.indexOf(data);
            if (~index) {
                arr[index] = 'gi';
            }
        }
        if(data % 5 == 0){
            var index = arr.indexOf(data);
            if (~index) {
                arr[index] = 'ho';
            }
        }
    });

    return arr

}
console.log(checkYuGiOh(10))
console.log(checkYuGiOh("5"))
console.log(checkYuGiOh("fizzbuzz is meh"))