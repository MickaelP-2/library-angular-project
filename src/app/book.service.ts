import { Injectable } from '@angular/core';
import { Book } from '../book.model'; // Importation du modèle Book
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importation du module HttpClient pour les requêtes HTTP
import { catchError, Observable, throwError } from 'rxjs'; // Importation de RxJS pour la gestion des erreurs et des observables

@Injectable({
  providedIn: 'root' // Le service est disponible dans toute l'application
})
export class BookService {
  private apiUrl: string = 'http://localhost:3000/books'; // URL de base de l'API pour les livres

  constructor(private http: HttpClient) { } // Injection du service HttpClient

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl); // Récupère tous les livres de l'API
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`) // Récupère un livre par son ID
      .pipe(
        catchError(error => {
          console.error(`Book with ID ${id} not found`, error); // Gestion des erreurs
          return throwError(() => new Error('Not Found')); // Retourne une erreur si le livre n'est pas trouvé
        })
      );
  }

  addBook(book: Book): Observable<Book>{
    return this.http.post<Book>(this.apiUrl, book); // Ajoute un nouveau livre à l'API
  }

  removeBook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); // Supprime un livre par son ID
  }

  updateBook(id: string, updatedBook: Book): Observable<Book> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Définition des headers pour la requête
    return this.http.put<Book>(`${this.apiUrl}/${id}`, updatedBook, { headers }) // Met à jour un livre existant
      .pipe(
        catchError(error => {
          console.error(`Error updating book with ID ${id}: `, error); // Gestion des erreurs
          return throwError(() => new Error('Failed to update book')); // Retourne une erreur si la mise à jour échoue
        })
      );
  }
}
