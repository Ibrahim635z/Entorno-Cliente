import { Book } from "./Book.js";
import { Booklist } from "./Booklist.js";


const paintBooks= (listBook) => {

    const ul=document.getElementById("reading-list");
    const div=document.getElementById("book-list-container")
    ul.innerHTML="";

    const p=document.createElement("p");    //aqui tengo un error hay que mirarlo
    div.appendChild(p); // error por tanto hay que mirarlo
    listBook.arrayBooks.forEach(element => {
        const li = document.createElement("li");
        
        li.innerHTML = `
            titulo: ${element.title}
            Author: ${element.author}
            Genre: ${element.genre}
            
        `;

        
        ul.appendChild(li);

        li.addEventListener("click", () => {
            element.read=true;
            listBook.booksRead++;
            listBook.booksNotRead--;
            console.log(listBook);
            console.log(element.read);
            element.readDate = new Date(Date.now());
             li.innerHTML = `
             titulo: ${element.title}
            Author: ${element.author}
            Genre: ${element.genre}
            <br>
            leido el...  ${element.readDate.toLocaleDateString()}
            `;
            // error hay que mirar lo del P
            p.innerHTML=`
                Libro ${listBook.booksRead} de ${listBook.arrayBooks.length} leidos.
                
                `;
        })
    });
}


const addNewBook= (listBook) => {
    document.getElementById("add-btn").addEventListener("click",() =>{
        const title=document.getElementById("title").value;
        const author=document.getElementById("author").value;
        const genre=document.getElementById("genre").value;
    
        const book=new Book(title,author,genre)

        console.log(book);
        
        listBook.add(book);

        console.log(listBook);

        paintBooks(listBook);
        
    })

}



const main= () => {

    const listBook= new Booklist();
    addNewBook(listBook);

    

}


document.addEventListener("DOMContentLoaded",main);