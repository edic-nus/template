class TeamMember extends HTMLElement {
  static get observedAttributes() {
    return ["avatar", "name", "department", "year"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${this.avatar}" alt="${this.name}">
    <p><strong>${this.name}</strong></p>
    <p>${this.department}</p>
    <p>${this.year}</p>
    <style>
      :host {
        display: block;
        max-width: 120px;
        text-align: center;
      }

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: block;
        margin: auto;
      }

      p {
        text-align: center;
        margin: 8px 0;
      }

      @media (max-width: 599px) {
        img {
          display: none;
        }
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("team-member", TeamMember);
