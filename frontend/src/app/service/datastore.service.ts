import { Injectable } from "@angular/core";


@Injectable()
export class petitionDataService {
  //petitionData: Petition;
  petitionId: string;

  getPetitionId() {
    return this.petitionId;
  }
  setPetitionId(data: string) {
    this.petitionId = data;
  }
}

// Data Service to transfer petition
//   getTodoData(){
//     return this.petitionData;
//   }
//   setTodoData(data: Petition) {
//     this.petitionData = data;
//   }

  