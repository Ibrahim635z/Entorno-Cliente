//funcion calcular edad cuando el usuario le proporciona su fecha de nacimiento y el año actual
function AgeCalculator() {
    const aniocumple=parseInt(prompt("Introduce el año de tu cumpleaños"))
    const anioActual=parseInt(prompt("Introduce el año actual"))

    const anio1=anioActual-aniocumple;
    const anio2=anio1-1;

    alert(`Tienes ${anio1} años o ${anio2} años`);
};

// funcion que calcula cuanta cantidad de algo necesitas tener para poder comerlo una cantidad de X dias hasta la edad que el usuario ha introducido

function supplyCalculator() {
    
    let age=parseInt(prompt("Put your age"));
    let maxage=parseInt(prompt("Put the age that you need to know for amount your snack"));
    let amount=parseInt(prompt("What amount per day do you eat?"));
    let years=(maxage-age);
    let amountTotal=0;
    
        
     amountTotal+=years*365*amount;
        
    



    alert(`You will need ${amountTotal} to last you until the ripe old age of: ${maxage}`);
}

// function that calculate the circunference and area based on radius

function circumference() {
    let radius=parseInt(prompt("Put the radius of the circle that you want to know"));
    const pi2=3.142;
    let long=2*pi2*radius;

    alert(`The circumference is ${long}`);
}
function areaCircumference() {
    let radius=parseInt(prompt("Put the radius of the circle that you want to know the area"))
    const pi=3.142;
    let area=pi*radius**2;

    alert(`The area is ${area}`);
}

// function that convert celsius to farenheit and vice versa

function converterTemperature() {
    
    let celsius=parseInt(prompt("Put the temperature in celsius"));
    let farenheit=parseInt(prompt("Put the temperature in Farenheit"));
    let CelsiusToFarenheit=celsius*33.8;
    let farenheitToCelsius=farenheit*(-17.2);

    alert(`${celsius} ºC is ${CelsiusToFarenheit}ºF`);
    alert(`${farenheit}ºF is ${farenheitToCelsius}ºC`);

}