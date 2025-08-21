import { Component, input, Input, computed } from '@angular/core';
// import { DUMMY_USERS} from "./dummy-users";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true }) avatar: string = '';
  // @Input({ required: true }) name: string = '';
  avatar = input.required<string>();
  name = input.required<string>();
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // get ImageUrl() {
  //   return `assets/users/${this.selectedUser().avatar}`;
  // }

  // imagePath() {
  //   return `assets/users/${this.selectedUser().avatar}`;
  // }

  // get imagePath() {
  //   return `assets/users/${this.avatar}`;
  // }

  imagePath = computed(() => {
    return `assets/users/${this.avatar()}`;
  });
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // onSelectUser(userId: string) {
  //   const foundUser = DUMMY_USERS.find(user => user.id === userId);
  //   if (foundUser) {
  //     this.selectedUser.set(foundUser);
  //   }
  // }
  onSelectUser() {
    // this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
  }
}
