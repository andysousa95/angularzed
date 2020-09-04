import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})
export class ModalProductComponent {
  
  public modalData = { name: null, value: null , type: 'insert' }
  title = 'Criar';
  constructor(
    public dialogRef: MatDialogRef<ModalProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      Object.assign(this.modalData, data);
      this.title = (this.modalData.type == 'insert') ? 'Criar': 'Atualizar';
      
    }

  onNoClick() {
    this.dialogRef.close();
  }

}
