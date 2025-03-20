import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../Services/person-service.service';
import { IPerson } from '../Model/IPerson';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-table',
  imports: [NgFor, FormsModule],
  templateUrl: './main-table.component.html',
  styleUrl: './main-table.component.css'
})
export class MainTableComponent implements OnInit {

  personList : IPerson[] = [];
  inputValue: string = '';

  constructor(private _api: PersonServiceService, private router: Router){}

  ngOnInit(): void {
    this.getAllPersonsAux();
  }

  deletePersonById(id:any):void {
    console.log(id);
    this._api.DeletePerson(id).subscribe({
      next:  (data) => {
        this.getAllPersonsAux();
      }
    });
  }

  getAllPersonsAux(){
    this._api.getAllPersons().subscribe({
      next: (data: IPerson[])=>{
        this.personList = data;
      },
      error:(data:any)=> {
        console.log(data);
      }
    });
  }

  getSpecificPersons(){
    console.log(this.inputValue);
    this._api.GetPersonByNameOrEmail(this.inputValue).subscribe({
      next: (data: IPerson[])=>{
        console.log(this.inputValue);
        this.personList = data;
      },
      error:(data:any)=> {
        console.log(data);
      }
    });
  }

  navigateToCreate(){
    this.router.navigate(['/create']);
  }

}
