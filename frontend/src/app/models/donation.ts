export class Donation {
id: string;
fundraiserId: string;
emailId: string;
amount: number;
creationDate: Date;

    constructor(fundraiserId: string,
                emailId: string,
                amount: number) {
        this.fundraiserId = fundraiserId;
        this.emailId = emailId;
        this.amount = amount;
        this.creationDate = new Date();
    }

}
