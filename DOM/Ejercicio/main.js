import db  from './db.json' with {type: 'json'};

 

const filterCategory= () => {
   const products=db.products;
    const select=document.getElementById("select");

    select.addEventListener("change", () =>{

        const selectValue=select.value

       
        if (selectValue) {
            
         const  productsFiltered = products.filter(element =>element.category === selectValue);
        

        listProduct(productsFiltered);
    }
    })
    

}


const listProduct= (db) => {

    const container=document.getElementById("product-list");
    container.innerHTML=""
    const fragment= document.createDocumentFragment();

    //console.log(db.products);
    const products=db.products;


    products.forEach(element => {
        
    const productCard=document.createElement("div");

    const title=document.createElement("h3");
    const price=document.createElement("p");
    const image=document.createElement("img");

    title.textContent = element.title;
    price.textContent = `${element.price}$`;
    image.src = element.image
    
    productCard.appendChild(title);
    productCard.appendChild(price);
    productCard.appendChild(image);

    //console.log(element.title);
    fragment.appendChild(productCard);
    });

    
    container.appendChild(fragment);
   
}

const main= () => {
   
    listProduct(db);
    filterCategory();
}


document.addEventListener("DOMContentLoaded",main);