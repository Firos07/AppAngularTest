import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IPerson } from '../Model/IPerson';
import { Router } from '@angular/router';
import { PersonServiceService } from '../Services/person-service.service';

@Component({
  selector: 'app-create-item',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-item.component.html',
  styleUrl: './create-item.component.css'
})
export class CreateItemComponent {
  personForm!: FormGroup;

  constructor(private _api: PersonServiceService, private formBuilder: FormBuilder, private router: Router) {
    this.personForm = this.formBuilder.group({
      Name: ['', [Validators.required]],
      Direction: ['', [Validators.required]],
      Phone: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Age: ['', [Validators.required]],
    })
  }

  SendToCreate(event: Event) {
    event.preventDefault();
    const persona: IPerson = this.personForm.value as IPerson;

    this._api.CreatePerson(persona).subscribe({
      next: ()=>{
        
      },
      error:(data:any)=> {
        console.log(data);
      }
    });
  }

  hasErrorsItemForm(field: string) : boolean | undefined {
    return this.personForm.get(field)?.hasError('required') && this.personForm.get(field)?.touched;;
  }

  navigateHome(){
    this.router.navigate(['']);
  }

}
