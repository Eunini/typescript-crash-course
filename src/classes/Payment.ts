import { Formatter } from "../interfaces/Formatter.js";

// classes
export class Payment implements Formatter{
    constructor(
        readonly client: string, 
        private details: string, 
        public amount: number,
      ){}

    format() {
      return `${this.client} is owed £${this.amount} for ${this.details}`;
    }
}
  