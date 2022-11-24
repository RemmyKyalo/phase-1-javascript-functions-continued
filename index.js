// code your solution here

function saturdayFun(message= "roller-skate"){
    return `This Saturday, I want to ${message}!`;


}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(message ='go to the office'){

   
    return `This Monday, I will ${message}.`;
}
mondayWork("work from home");

function wrapAdjective(name = "*") {
   
    return function(adjective = "special") {
        return `You are ${name}${adjective}${name}!`;
    }
}
