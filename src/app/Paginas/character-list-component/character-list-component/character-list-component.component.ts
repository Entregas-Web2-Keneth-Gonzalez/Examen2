import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../Servicios/api.service';
import Character from '../../../Models/Character';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DetalleComponent } from './detalle/detalle.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-character-list-component',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './character-list-component.component.html',
  styleUrls: ['./character-list-component.component.scss'] 
})
export class CharacterListComponentComponent implements OnInit { 

  displayedColumns: string[] = ['_id', 'allies', 'enemies', 'name', 'detalle'];
  characters: Character[] = [];

  readonly dialog = inject(MatDialog);

  constructor(private apiServ: ApiService) {}

  ngOnInit() { 
    this.cargarDatos();
  }

  cargarDatos() {
    this.apiServ.getCharacters().subscribe((characters) => {
      this.characters = characters;
    });
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(DetalleComponent, {
      height: '500px',
      width: '500px',
      data: { id }, 
    });
  }

}