import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../../book.model';

@Component({
  selector: 'digi-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{
  livres: Book[] = [];

  constructor(private bookService: BookService) {}
  //appellee apres initialisation
  ngOnInit(): void {
    this.livres = this.bookService.getBook();
  }

  //methode deleteLivre du service
  deleteLivre(id: number):void {
    this.bookService.deleteBook(id);
    this.livres = this.bookService.getBook();
  }
}


