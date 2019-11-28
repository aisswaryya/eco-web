import { Injectable } from '@angular/core';
import { Petition } from '../model/petition.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PetitionService {

  constructor(private http:HttpClient) { }
  private petitionUrl = 'http://localhost:3000/petition';
  //All the common services go here

  // Call create petition API
  public createPetition(petition) {
    console.log("Request Object" + petition);
    return this.http.post<Petition>(this.petitionUrl, petition);
  }
}
