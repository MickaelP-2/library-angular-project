import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../book.model';

@Component({
  selector: 'digi-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  // Properties to hold the new book details entered by the user
  newTitle: string = "";
  newAuthor: string = "";
  newDescription: string = "";

  // Property to hold success messages
  successMessage = "";

  // EventEmitter to emit the new book object to the parent component
  @Output() addBook: EventEmitter<Book> = new EventEmitter<Book>();

  // Method to add a new book
  onAddBook() {
    // Check if the title and author fields are not empty
    if (this.newTitle.trim() && this.newAuthor.trim()) {
      // Emit a new book object with the entered details
      this.addBook.emit({
        title: this.newTitle,
        author: this.newAuthor,
        description: this.newDescription,
        id: Date.now().toString(), // Generate a unique ID for the new book
        status: "available" // Set the initial status of the book to "available"
      });

      // Set a success message
      this.successMessage = `Le livre ${this.newTitle} à bien été ajouté`;

      // Clear the input fields
      this.newTitle = "";
      this.newAuthor = "";
      this.newDescription = "";
    }
  }
}
