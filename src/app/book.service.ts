import { Injectable } from '@angular/core';
import { Book } from '../book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [];
  private id: number = 0;

// Ajouter un livre
addBook(titre: string, auteur: string, statut: string): void {
  const newBook: Book = { id: this.id++, titre, auteur, statut };
  this.books.push(newBook);
}

// Supprimer un livre
deleteBook(id: number): void {
  this.books = this.books.filter(book => book.id !== id);
}

// Obtenir la liste des livres
getBook(): Book[] {
  return this.books;
}

  constructor() { }
}
