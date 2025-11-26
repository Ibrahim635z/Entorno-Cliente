import { Book } from "./Book.js";

export class Booklist {

    constructor() {
        this.booksRead=0;
        this.booksNotRead=0;
        this.nextBook=null;
        this.currentBook=null;
        this.lastBook=null;
        this.arrayBooks=[];
    }

    add(book){
        this.arrayBooks.push(book);
        this.booksNotRead++;

        if (!this.currentBook) {
            this.currentBook = book;
        } 
        // Si ya hay uno leyendo pero no hay siguiente, este es el siguiente
        else if (!this.nextBook) {
            this.nextBook = book;
        }
    }

    read(book){
        this.currentBook=book;
    }

    finishCurrentBook(){
        if (this.currentBook==null) {
            console.log("You are not currently reading a book");
        }else{
            this.currentBook.read=true;
            this.currentBook.readDate= new Date(Date.now());
      
            this.lastBook=this.currentBook;
            this.currentBook=this.nextBook;

            const next= this.arrayBooks.find(book => !book.read && book!==this.currentBook);

            this.nextBook = next || null; //si lo encuentro next y si no pues null;

            this.booksRead++;
            this.booksNotRead--;
            
        }
    }
}