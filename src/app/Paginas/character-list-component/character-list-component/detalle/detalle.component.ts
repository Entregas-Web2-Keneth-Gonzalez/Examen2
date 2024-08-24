import {ChangeDetectionStrategy, Component, ElementRef, Inject, inject, model, signal, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle,} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import Character from '../../../../Models/Character';
import { ApiService } from '../../../../Servicios/api.service';
import { NgIf, NgStyle } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, NgIf, NgStyle],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})
export class DetalleComponent {

  tittle = "Personaje";
  character!:Character;

  @ViewChild('message') messageInput!: ElementRef;

  constructor(
    private apiServ: ApiService,
    private dialogRef: MatDialogRef<DetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string, character: Character }
  ) {}

  ngOnInit(): void {
      this.cargarPersonaje(this.data.id);
  }

  cargarPersonaje(id: string): void {
    this.apiServ.getOneCharacter(id).subscribe((character) => {
      this.character = character; 
    });
  }

}
