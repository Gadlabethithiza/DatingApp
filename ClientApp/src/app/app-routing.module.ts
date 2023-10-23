import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  //{path: 'members', component: MemberListComponent}, //this can be access even the user not logged in
  //{path: 'members/:id', component: MemberDetailComponent}, //this can be access even the user not logged in
  //{path: 'lists', component: ListsComponent}, //this can be access even the user not logged in
  //{path: 'messages', component: MessagesComponent}, //this can be access even the user not logged in

  //Below can be used to safeGuard everything in the menu
  {path: '', 
      runGuardsAndResolvers: 'always',
      canActivate: [authGuard],
      children: [
        {path: 'members', component: MemberListComponent},
        {path: 'members/:id', component: MemberDetailComponent},
        {path: 'lists', component: ListsComponent},
        {path: 'messages', component: MessagesComponent},
      ]
  },
  {path: 'errors', component: TestErrorComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'},

  //Below can be used to safeGuard each single components in the menu
  /*{path: 'members', component: MemberListComponent, canActivate:[authGuard]},
  {path: 'members/:id', component: MemberDetailComponent, canActivate:[authGuard]},
  {path: 'lists', component: ListsComponent, canActivate:[authGuard]},
  {path: 'messages', component: MessagesComponent, canActivate:[authGuard]}, */

  //{path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
