import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoryDialogData
  ) { }

  ngOnInit(): void {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface CategoryDialogData {
  name: string;
  description: string;
}