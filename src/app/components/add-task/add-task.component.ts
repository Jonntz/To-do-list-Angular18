import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { Task } from '../../types/task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Task>()

  task: string = '';
  category: string = '';
  completed: boolean = false;

  onSubmit(){
    if(!this.task){
      alert("Adicione uma tarefa!");
      return;
    }

    const newTask = {
      tarefa: this.task,
      categoria: this.category,
      concluido: this.completed
    }

    this.onAddTask.emit(newTask);
    this.task = '';
    this.category = '';
    this.completed = false;
  }
}
