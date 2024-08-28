import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-form.component.html',
  styleUrl: './button-form.component.scss'
})
export class ButtonFormComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() isFormShowing = new EventEmitter();

  showForm(){
    this.isFormShowing.emit();
  }
}
