export default class Body {
    #text = '';

    setBody(text) {
        this.#text = text;
    }

    getBody() {
        return this.#text;
    }
}
