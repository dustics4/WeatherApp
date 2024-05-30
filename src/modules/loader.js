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
        const loader = document.querySelector('.loader');
        loader.classList.remove("loader-hidden");
    }

    hide() {
        const loader = document.querySelector('.loader');
        loader.classList.add("loader-hidden");
    }

    remove() {
        this.loader.remove();
    }
}