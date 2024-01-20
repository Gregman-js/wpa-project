export default class Title {
    #text = '';

    static create(title) {
        const instance = new Title();
        instance.setTitle(title);
        return instance;
    }

    setTitle(title) {
        this.#text = title;
    }

    getTitle() {
        return this.#text;
    }
}
