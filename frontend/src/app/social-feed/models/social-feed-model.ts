export class SocialFeed {
    data: string;
    description: string;
    location: string;
    emailId: string;
    createdDate: Date;
    updatedDate: Date;
    constructor(data: string, description: string, location: string, emailId: string, createdDate: Date, updatedDate: Date) {
        this.data = data;
        this.description = description;
        this.location = location;
        this.emailId = emailId;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }
}