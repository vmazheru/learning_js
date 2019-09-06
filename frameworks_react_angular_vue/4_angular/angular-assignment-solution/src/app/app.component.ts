import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbies: string[] = ['Cooking', 'Sports'];
  newHobbyInput = '';
  hobbyWasDeleted = false;

  onNewHobby() {
    this.hobbies.push(this.newHobbyInput);
  }
  onHobbyRemoved(hobby: string) {
    const position = this.hobbies.indexOf(hobby);
    this.hobbies.splice(position, 1);
    this.hobbyWasDeleted = true;
  }
}
