export class SocialFeed {
    id: string;
    image: any;
    description: string;
    location: string;
    emailId: string;
    createdDate: Date;
    updatedDate: Date;
    constructor(id: string, image: any, description: string, location: string, emailId: string, createdDate: Date, updatedDate: Date) {
        this.id = id;
        this.image = image;
        this.description = description;
        this.location = location;
        this.emailId = emailId;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }
}