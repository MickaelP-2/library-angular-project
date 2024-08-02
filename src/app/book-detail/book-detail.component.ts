import { Component } from "@angular/core";
import { Book } from "../../book.model";
import { BookService } from "../book.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'digi-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
  // Property to hold the book details
  book!: Book;
  
  // Property to hold messages for the user
  message: string = '';

  // Constructor to inject the necessary services
  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {}

  // Lifecycle hook that runs after the component is initialized
  ngOnInit(): void {
    // Retrieve the 'id' parameter from the route
    const id = this.route.snapshot.paramMap.get('id');
    
    // Check if the ID is valid
    if (id === null) {
      this.message = 'Invalid ID: null';
      console.error('Invalid ID: null');
      return;
    }

    // Fetch the book details using the BookService
    this.bookService.getBookById(id).subscribe({
      next: (book) => {
        this.book = book;
      },
      error: (error) => {
        this.message = `La tâche avec l'ID : ${id} n'a pas été trouvée.`;
      }
    });
  }

  // Method to navigate back to the book list
  returnToBooks() {
    this.router.navigate(['/']);  
  }

  // Method to navigate to the edit page for the current book
  editBook(book: Book) {
    this.router.navigate(['/edit', book.id]);  
  }

  // Method to change the status of the book and update it in the server
  ChangeStatusBook(book: Book) {
    // Toggle the status of the book
    if (book.status === "available") {
      book.status = "borrowed";
    } else {
      book.status = "available";
    }

    // Update the book using the BookService
    this.bookService.updateBook(this.book.id, this.book).subscribe({
      next: (updatedBook) => {
        console.log('Book updated successfully:', updatedBook);
        this.message = 'Status updated'; 
      },
      error: (error) => {
        console.error('Error updating book:', error);
        this.message = 'Failed to update the book.';
      }
    });
  }
}
