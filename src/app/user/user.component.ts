import { Component } from '@angular/core';
import { DUMMY_USERS} from "./dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get ImageUrl() {
    return `assets/users/${this.selectedUser.avatar}`;
  }
  onSelectUser(userId: string) {
    this.selectedUser = DUMMY_USERS.find(user => user.id === userId) || this.selectedUser;
    console.log('Selected User:', this.selectedUser);
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
    console.log('Changed User:', this.selectedUser);
  }
}
