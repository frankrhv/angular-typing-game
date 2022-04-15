import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(target: EventTarget) {
    const value = (target as HTMLInputElement).value;
    this.enteredText = value;
  }

  compare(randomletter: string, enteredLetter: string): string {
    if (!enteredLetter) {
      return 'pending';
    }

    return enteredLetter === randomletter ? 'correct' : 'incorrect';
  }

  onButtonClick() {
    this.randomText = lorem.sentence();
    console.log(this.randomText);
  }
}
