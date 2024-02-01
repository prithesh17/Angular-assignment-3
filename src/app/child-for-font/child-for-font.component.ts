import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FontSizeDirective } from '../font-size-dir/font-size.directive';
@Component({
  selector: 'app-child-for-font',
  standalone: true,
  imports: [FontSizeDirective],
  templateUrl: './child-for-font.component.html',
  styleUrl: './child-for-font.component.css'
})
export class ChildForFontComponent {
  @Input() size: number = 10;
}
