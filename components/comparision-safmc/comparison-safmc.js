new gridjs.Grid({
  columns: ["", "SAFMC 2024", "SAFMC 2025"],
  data: [
    ["Field layout", "Unknown layout prior to Competition Day Mission. Disclosed layout on Competition Day Mission", "Unknown layout prior to Competition Day Mission. Disclosed layout for Known Search Area on Competition Day Mission. Undisclosed layout for Unknown Search Area on Competition Day Mission."],
    ["Pillar Obstacle", "No Pillar Obstacles.", "8 Pillar Obstacles."],
    ["Rescue Victim", "Maximum 4 Single-Rescue Victims Maximum 4 Double-Rescue Victims.", "Total 8 Victims (Includes Regular and Bonus Victims)."],
    ["Danger Zone", "No Danger Zones.", "Maximum 4 Danger Zones."],
    ["Navigation Aid", "Maximum 10 Navigation Aids within Search Area. Unlimited Navigation Aids within Start Area.", "Maximum 10 Navigation Aids within Known Search Area. Unlimited Navigation Aids within Start Area. No Navigation Aids allowed within Unknown Search Area."],
  ],
}).render(document.getElementById("comparison-safmc"));

class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
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
    <slot></slot>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("comparison-safmc", TableComponent);
