/**
 * Fundraiser Model
 */
export class Fundraiser {
id: string;
title: string;
category: string;
active: boolean;
emailId: string;
shortDescription: string;
longDescription: string;
accountNo: string;
routingNo: string;
targetAmount: number;
collectedAmount: number;
createdDate: Date;
modifiedDate: Date;

    constructor(title: string,
                category: string,
                active: boolean,
                emailId: string,
                shortDescription: string,
                longDescription: string,
                accountNo: string,
                routingNo: string,
                targetAmount: number,
                collectedAmount: number,
                ) {
        this.title = title;
        this.category = category;
        this.active = active;
        this.emailId = emailId;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.targetAmount = targetAmount;
        this.accountNo = accountNo;
        this.routingNo = routingNo;
        this.collectedAmount = collectedAmount;
        this.createdDate = new Date();
        this.modifiedDate = new Date();
    }


}
