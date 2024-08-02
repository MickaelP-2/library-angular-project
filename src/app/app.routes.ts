import { Routes } from '@angular/router';
import { BookDetailComponent} from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';


export const routes: Routes = [
    { path: '', component: BookListComponent},
    { path: 'view/:id', component: BookDetailComponent},
    { path: 'delete/:id', component: BookListComponent },
    { path: 'edit/:id', component: EditBookComponent},
    { path: 'add/:id', component: AddBookComponent}
];
