import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../book.model';

@Component({
  selector: 'digi-edit-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent {
  book!: Book;
  message: string = "";

  // Constructor to inject the necessary services
  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  // Angular lifecycle hook that gets called once the component is initialized
  ngOnInit(): void {
    // Retrieve the 'id' parameter from the route
    const id = this.route.snapshot.paramMap.get('id');
    // Check if the 'id' parameter is valid
    if (id === null) {
      this.message = 'Invalid ID: null';
      console.error('Invalid ID: null');
      return;
    }
    // Fetch the book details using the BookService
    this.bookService.getBookById(id).subscribe({
      next: (book) => {
        // Assign the retrieved book to the component's 'book' property
        this.book = book;
      },
      error: (error) => {
        // Display an error message if the book is not found
        this.message = `La tâche avec l'ID : ${id} n'a pas été trouvée.`;
      }
    });
  }

  // Method to handle the book editing functionality
  onEditBook() {
    // Call the BookService to update the book details
    this.bookService.updateBook(this.book.id, this.book).subscribe({
      next: (updatedBook) => {
        // Log success message and navigate to the book view page upon successful update
        console.log('Book updated successfully:', updatedBook);
        this.router.navigate(['/view', this.book.id]);
      },
      error: (error) => {
        // Log error message and display a failure message if the update fails
        console.error('Error updating book:', error);
        this.message = 'Failed to update the book.';
      }
    });
  }
}