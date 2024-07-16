import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

let list = [
  RouterOutlet,
  AppNavbar,
  HeaderComponent,
  FormsModule,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: list,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  test_var: string = "this is test_var";
  // imgUrl: string =
  //   "https://www.color-meanings.com/wp-content/uploads/shades-of-red-color-names.png";
  isDisabled: boolean = true;
  isActive: boolean = true;
  fruitName: string = "Apple";
  userName: string = "John snow";
  textValue: string = "some random text";

  buttonClick() {
    console.log("hello world");
  }
  hoverFunc() {
    console.log("did hover");
  }
  keyEvent(event: any) {
    // console.log("key enter");
    console.log("key is: ", event.keyCode, " ", event.key);
    switch (event.key) {
      case 'h':
        console.log("hhhhhhhh");
        break;
      default:
        break;
    }
  }
  keyEnter() {
    console.log("receive enter");
  }
  handle0(variable: HTMLInputElement) // template variable
  {
    console.log(variable.value);
  }
  updateUserName(name: HTMLInputElement) {
    this.userName = name.value;
    console.log(this.userName);
  }
  func() {
    console.log("func: ", this.textValue);
  }
}
