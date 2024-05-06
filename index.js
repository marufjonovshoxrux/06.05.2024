function names(...arr) {
    let min = arr[0]

    for(let name of arr) {
        if (name.length < min.length) {
            min = name
            
        }

    }
    return min
}

let minName = names('Farzod','Samir','Shoxrux','Damir')

console.log('Longest name:',minName);



