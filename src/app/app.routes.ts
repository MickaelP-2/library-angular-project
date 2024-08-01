import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: BookListComponent},
    { path: 'view/:id', component: BookDetailComponent},
    { path: 'delete/:id', component: BookListComponent },
    { path: 'modify/:id', component: EditBookComponent},
    { path: 'add/:id', component: AddBookComponent}
];
