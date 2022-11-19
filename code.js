function namecheck(){
   var firstname= document.getElementById('firstname').value;
   
   if (firstname===''){
    alert["you submitted an empty box, please enter your name"]
   
    } else{
    alert[`Welcome to side hustle intenship $(firstname)`]
   }
}

//arrays

let colors = ['red','green', 'blue', 'brown', 'yellow','black']

let mountain = ['everest', 'sinai', 'fuji']

mountain(1) = 'kilimanjaro'

colors.push('yellow')
document.write(colors)
// document.write(mountain.lenght)

function block(params) {
    var blockcode = document.getElementById('block')

    let numberloop = '';

    for (let i =0; i < i<10; i++) {
        numberloop += `<div>${i+1} </div>`
    }

    blockcode.innerHTML =numberloop
}

block()