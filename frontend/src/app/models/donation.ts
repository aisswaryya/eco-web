/**
 * Donation model
 */
export class Donation {
id: string;
fundraiserId: string;
name: string;
emailId: string;
amount: number;
creationDate: Date;

    constructor(fundraiserId: string,
                name: string,
                emailId: string,
                amount: number) {
        this.fundraiserId = fundraiserId;
        this.name = name;
        this.emailId = emailId;
        this.amount = amount;
        this.creationDate = new Date();
    }

}
