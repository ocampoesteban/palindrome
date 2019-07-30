import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalindromeComponent } from './palindrome/palindrome.component';


const routes: Routes = [
  { path: '', redirectTo: '/palindrome', pathMatch: 'full' },
  { path: 'palindrome', component: PalindromeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }