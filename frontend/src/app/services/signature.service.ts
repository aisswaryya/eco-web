import { Injectable } from '@angular/core';
import { Signature } from '../model/signature.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Petition } from '../model/petition.model';

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
    console.log('Request Object' + signature);
    return this.http.post<Signature>(this.signatureUrl, signature);
  }

  // call get by Email Signature API
  public getbyIDSignature(email) {
    console.log(this.signatureUrl + "/email/"+ email);
    return this.http.get<Signature[]>(this.signatureUrl + "/email/" + email);
  }

   // call get count by PetitionId Signature API
   public getbyEmailIDSignatureCount(petitionId) {
    console.log(this.signatureUrl + "/count/"+ petitionId);
    return this.http.get<Signature[]>(this.signatureUrl + "/count/" + petitionId);
  }
}
