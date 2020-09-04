import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalProductComponent } from './modal-product/modal-product.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularzed';
  displayedColumns: string[] = ['name', 'value', 'functions'];
  dataSource: any;
  dbName = 'produtos';

  constructor(public dialog: MatDialog,
    private angularFireDatabase: AngularFireDatabase) {

      this.dataSource = this.angularFireDatabase.list(this.dbName)
      .snapshotChanges()
      .pipe(
        map(items => {
          return items.map(item => {
            return Object.assign({key: item.payload.key}, item.payload.val())
          })
          
        })
      )
    }

  insert(){
    const dialogRef = this.dialog.open(ModalProductComponent, {
      width: '250px',
      data: { type: 'insert' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      this.angularFireDatabase.list(this.dbName).push(result);
      }
    });
  }

  edit(data){ 
    const dialogRef = this.dialog.open(ModalProductComponent, {
    width: '250px',
    data: {...data, type: 'update '}
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result){
    this.angularFireDatabase.list(this.dbName).update(data.key, result);
    }
  });
}

  delete(key){
    this.angularFireDatabase.list(this.dbName).remove(key);
  }
}