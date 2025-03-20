import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerson } from '../Model/IPerson';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  baseUri : string = "http://localhost:5165/person/Person";

  

  constructor(private _http : HttpClient) { }

  public getAllPersons() : Observable<IPerson[]>{

    return this._http.get<IPerson[]>(this.baseUri + '/GetAllPersons');
  }

  public GetPersonByNameOrEmail(value: string) : Observable<IPerson[]>{
    var item = '';
  
    if(value !== ''){
      item = '/GetPersonByNameOrEmail?value='+value;
    }else{
      item = '/GetAllPersons';
    }

    return this._http.get<IPerson[]>(this.baseUri + item);
  }

  public UpdatePerson(person : IPerson) : Observable<boolean>{

    return this._http.put<boolean>(this.baseUri + '/updatePerson', person);
  }
 
  public CreatePerson(person : IPerson) : Observable<boolean>{

    return this._http.post<boolean>(this.baseUri + '/createPerson', person);
  }

  public DeletePerson(idPerson : string) : Observable<boolean>{

    return this._http.delete<boolean>(this.baseUri + `/deletePerson?idPerson=${idPerson}`);
  }
}
