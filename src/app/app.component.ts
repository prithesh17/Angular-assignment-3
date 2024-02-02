import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ChildForFontComponent } from './child-for-font/child-for-font.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent,ChildForFontComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';
  str: string ='';
  sendUsername(value: string) {
    this.str = value;
  }
  size:number=18;
  sendFontsize(value: string) {
    this.size = parseInt(value);
  }
}
