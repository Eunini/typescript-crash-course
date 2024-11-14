import { Formatter } from "../interfaces/Formatter.js";

export class ListTemplate{
    constructor(private container: HTMLUListElement){}

    render(item: Formatter, heading: string, position: 'start' | 'end'){
        const listElement = document.createElement('li');

        const headElement = document.createElement('h4');
        headElement.innerText = heading;
        listElement.appendChild(headElement);

        const p = document.createElement('p');
        p.innerText = item.format()
        listElement.append(p);

        if(position === 'start'){
            this.container.prepend(listElement)
        }else{
            this.container.append(listElement)
        }
    }
}