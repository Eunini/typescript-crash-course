// classes
export class Payment {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} is owed £${this.amount} for ${this.details}`;
    }
}
