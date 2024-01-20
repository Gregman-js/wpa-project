export default class Title {
    #text = '';

    setTitle(title) {
        this.#text = title;
    }

    getTitle() {
        return this.#text;
    }
}
