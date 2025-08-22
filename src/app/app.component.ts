import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {UserComponent} from "./user/user.component";
import { DUMMY_USERS } from "./user/dummy-users";
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Easy Task';
  users = DUMMY_USERS;
  selectedUserId: string = 'u1';

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onSelectUser(userId: string) {
    console.log('Selected User ID:', userId);
    this.selectedUserId = userId;
  }
}
