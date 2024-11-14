import { Formatter } from "../interfaces/Formatter.js";

// classes
export class Invoice implements Formatter{
    constructor(
        readonly client: string, 
        private details: string, 
        public amount: number,
      ){}

    format() {
      return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
  