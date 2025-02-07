
let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}



const sum = (a,b) => {
    return a + b
}


console.log(sum(7,3))


const fromEuroToDollar = function(valueInEuro){
  
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    
    return valueInDollar;
}
   


const fromDollarToYen = function(valueInDollar){
   
    let valueInYen = valueInDollar * oneEuroIs.JPY;
    
    return valueInYen;
}



const fromYenToPound = function(valueInYen){
   
    let valueInPound = valueInYen * oneEuroIs.GBP;
    
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };