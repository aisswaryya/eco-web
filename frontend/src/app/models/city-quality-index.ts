export class CityQualityIdex {
    text: string;
    alert: string;
    color: string;
    value: number;
    date: Date;
    constructor(text: string, alert: string, color: string, value: number, date: Date) {
        this.text = text;
        this.alert = alert;
        this.color = color;
        this.value = value;
        this.date = date;
    }
}