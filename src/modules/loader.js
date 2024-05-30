export default class Loader {
    constructor() {
        this.loader = this.createLoader();
    }

    createLoader() {
        const loaderDiv = document.createElement('div');
        loaderDiv.className = 'loader';
        document.body.appendChild(loaderDiv);
        return loaderDiv;
    }

    show() {
        this.loader.style.visibility = 'visible';
    }

    hide() {
        this.loader.style.visibility = 'hidden';
    }

    remove() {
        this.loader.remove();
    }
}