import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
import { User } from './user.model'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!:User;  
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  
  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
