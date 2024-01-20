export default class Body {
    #text = '';

    static create() {
        return new Body();
    }

    setBody(text) {
        this.#text = text;
    }

    getBody() {
        return this.#text;
    }
}
