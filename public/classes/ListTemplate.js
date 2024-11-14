export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const listElement = document.createElement('li');
        const headElement = document.createElement('h4');
        headElement.innerText = heading;
        listElement.appendChild(headElement);
        const p = document.createElement('p');
        p.innerText = item.format();
        listElement.append(p);
        if (position === 'start') {
            this.container.prepend(listElement);
        }
        else {
            this.container.append(listElement);
        }
    }
}
