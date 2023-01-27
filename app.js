const celsiuS = document.getElementById('celsius');
const fahrenheiT = document.getElementById('fahrenheit');
const kelviN = document.getElementById('kelvin');



function rndNumber(number){
    return Math.round(number*100)/100
}

// Celsius CONVERTER

celsiuS.addEventListener('input', function(){
    let cTemp = parseFloat(celsiuS.value);
    let fTemp = (cTemp*(9/5)) + 32;
    let kTemp = cTemp + 273.15;

    fahrenheiT.value = rndNumber(fTemp);
    kelviN.value = rndNumber(kTemp);
})

// farhnheit CONVERTER

fahrenheiT.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheiT.value);
    let cTemp = [(fTemp - 32) * 5]/9
    let kTemp = (fTemp - 32) * 5/9 + 273.15;

    celsiuS.value = rndNumber(cTemp);
    kelviN.value = rndNumber(kTemp);
})

// Kelvin converter

kelviN.addEventListener('input', function(){
    let kTemp = parseFloat(kelviN.value);
    let cTemp =  kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * 9/5 + 32;

    celsiuS.value = rndNumber(cTemp);
    fahrenheiT.value = rndNumber(fTemp);
})


//  Clear Button


btn.addEventListener('click', ()=>{
    celsiuS.value = "" ;
    fahrenheiT.value = "" ;
    kelviN.value = "" ;
});