//Declaration Ganeric function
function sayHello(){
    return("Hello")
}

//Declaration Ganeric function
function greeting(callback,name){
    console.log(callback(),name)

}
//Call Variable
greeting(sayHello,"Mark Zakerberg")