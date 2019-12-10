import { Injectable } from '@angular/core';
import { Signature } from '../model/signature.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SignatureService {

  constructor(private http: HttpClient) { }
  private signatureUrl = 'http://localhost:3000/signature';
  // All the common services go here

  // Call create signature API
  public createSignature(signature) {
    console.log("Request Object" + signature);
    return this.http.post<Signature>(this.signatureUrl, signature);
  }

//   // Call update petition API
//   public updatePetition(petition, id) {
//     console.log("From petition Service Update - "+ id);
//     return this.http.put<Petition>(this.petitionUrl + "/" + id, petition);
//   }

//   // Call delete petition API
//   public deletePetition(id) {
//     console.log(this.petitionUrl + "/"+ id);
//     return this.http.delete(this.petitionUrl + "/"+ id);
//   }
//   // call get all petition API
//   public getPetition() {
//     return this.http.get<Petition[]>(this.petitionUrl);
//   }

//   // call get by ID petition API
//   public getbyIDPetition(id) {
//     console.log(this.petitionUrl + "/"+ id);
//     return this.http.get<Petition>(this.petitionUrl + "/" + id);
//   }
}
