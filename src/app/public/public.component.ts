import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataDialogComponent } from './data-dialog/data-dialog.component';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDataDialog(): void {
    const dialogRef = this.dialog.open(DataDialogComponent, {
      minWidth: '80%'
    });

    dialogRef.afterClosed().subscribe(result => { });
  }
}
