import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Book } from '../../book.model';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookItemComponent } from "../book-item/book-item.component";
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'digi-book-list',
  standalone: true,
  imports: [CommonModule, BookItemComponent, AddBookComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  // Observable to hold the list of books, initialized to an empty observable
  books$: Observable<Book[]> = EMPTY;

  // Constructor to inject the necessary services
  constructor(private bookService: BookService, private router: Router) {}

  // Angular lifecycle hook that gets called once the component is initialized
  ngOnInit(): void {
    // Fetch the list of books using the BookService and assign it to the books$ observable
    this.books$ = this.bookService.getBooks();
  }

  // Method to add a new book
  addBook(book: Book): void {
    // Call the BookService to add the new book
    this.bookService.addBook(book).subscribe(() => {
      // Refresh the list of books after adding the new book
      this.books$ = this.bookService.getBooks();
    });
  }

  // Method to remove a book by its ID
  onRemoveBook(id: string): void {
    // Call the BookService to remove the book
    this.bookService.removeBook(id).subscribe(() => {
      // Refresh the list of books after removing the book
      this.books$ = this.bookService.getBooks();
    });
    // Navigate to the delete route after removing the book
    this.router.navigate(['/delete', id]);
  }

  // Method to navigate to the book details view
  viewBookDetails(book: Book): void {
    // Navigate to the book view page using the book's ID
    this.router.navigate(['/view', book.id]);
  }
}
