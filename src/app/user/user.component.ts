import { Component, signal } from '@angular/core';
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
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  get ImageUrl() {
    return `assets/users/${this.selectedUser.avatar}`;
  }
  onSelectUser(userId: string) {
    const foundUser = DUMMY_USERS.find(user => user.id === userId);
    if (foundUser) {
      this.selectedUser.set(foundUser);
    }
  }
}
