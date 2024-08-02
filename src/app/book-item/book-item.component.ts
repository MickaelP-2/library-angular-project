import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../book.model';

@Component({
  selector: 'digi-book-item',
  standalone: true,
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  // Input decorator to receive a book object from a parent component
  @Input() book!: Book;
  
  // Output decorator to emit an event when a book is removed
  @Output() remove = new EventEmitter<string>();
  
  // Output decorator to emit an event when a book is viewed
  @Output() view: EventEmitter<Book> = new EventEmitter<Book>();

  // Method to handle the removal of a book
  onRemove() {
    // Emit the book's ID to the parent component to handle the removal
    this.remove.emit(this.book.id);
  }

  // Method to handle viewing a book's details
  onView() {
    // Emit the book object to the parent component to handle viewing the book's details
    this.view.emit(this.book);
  }
}