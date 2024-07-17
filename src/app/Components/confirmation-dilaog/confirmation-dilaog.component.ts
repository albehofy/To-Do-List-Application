import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-confirmation-dilaog',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatDialogModule],
  templateUrl: './confirmation-dilaog.component.html',
  styleUrl: './confirmation-dilaog.component.css'
})
export class ConfirmationDilaogComponent {
  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}
