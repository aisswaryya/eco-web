export class SocialFeed {
    id: string;
    data: string;
    description: string;
    location: string;
    emailId: string;
    createdDate: Date;
    updatedDate: Date;
    constructor(id: string, data: string, description: string, location: string, emailId: string, createdDate: Date, updatedDate: Date) {
        this.id = id;
        this.data = data;
        this.description = description;
        this.location = location;
        this.emailId = emailId;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }
}