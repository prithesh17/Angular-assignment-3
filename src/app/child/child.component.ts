import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() data: string = '';
  isPrithesh: boolean = false;


  verifyUser(data: string): boolean {
    return data === "Prithesh";
  }

  check(){
    return false;
  }
}
