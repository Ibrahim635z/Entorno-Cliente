
async function getFetch() {
    let response=await fetch ("https://fakestoreapi.com/products");
    console.log("response",response);
    console.log("response.json() await", await response.json());
}


function getFetchV2() {
    fetch("https://fakestoreapi.com/products").then(res => res.json()).then(json => console.log(json)).catch(error => console.log(error));
}


const main= () => {
    getFetch();
    getFetchV2();
}

document.addEventListener("DOMContentLoaded",main);