import { Component } from '@angular/core';
import { ConfirmationDilaogComponent } from '../confirmation-dilaog/confirmation-dilaog.component';
import { ListItem } from '../../Interfaces/list-item';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,ConfirmationDilaogComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  list: Array<ListItem> = [];
  id: number;

  constructor(public dialog: MatDialog) {
    if(window.localStorage.getItem('list')){
      this.list = JSON.parse(window.localStorage.getItem('list') || ""); 
      this.id = this.list.length+1; 
    }else{
      window.localStorage.setItem("list", `${this.list}`)
      this.id = 1;
    }
  }

  ngOnInit():void {
    
  }
  addToList(item:any) {
    if(item.value.trim() !== ''){
      this.list.length > 0 ? this.id++: this.id = 1;
      this.list.push({id: this.id, title: item.value});
      item.value = '';
      window.localStorage.setItem("list", JSON.stringify(this.list));
    }else{
      alert("please Enter Data to Add it To list")
    }
  }

  delFromList(index: number) {
    this.list.splice(index, 1);
    window.localStorage.setItem("list", JSON.stringify(this.list));
  }

  clearAllTasks(){
      this.list = []; 
      localStorage.setItem('list',`${this.list}`)
  }



  openDialog(): void {
    let dialogRef = this.dialog.open(ConfirmationDilaogComponent, {
      width: '270px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.clearAllTasks()
      }
    });
  }
}
