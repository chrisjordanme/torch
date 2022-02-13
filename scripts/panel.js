class Panel extends HTMLElement {
    static get observedAttributes() {
        return ['name'];
    }

    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.render();
    }

    render() {
        const t = document.createElement('template');
        t.innerHTML = `
            <style>
                :host {
                    color: #fff;
                }
            </style>
            <h1>
                Hello world
            </h1>
        `;
        this.shadowRoot.appendChild(t.content.cloneNode(true));
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.shadowRoot.getElementById(name).innerText = newVal;
    }
}

window.customElements.define('panel-app', Panel);