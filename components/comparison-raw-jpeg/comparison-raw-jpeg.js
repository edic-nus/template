new gridjs.Grid({
    columns: ["RAW file (Original)", "JPEG file (Improved)"],
    data: [
      ["Must be processed to become a viewable image.", "Ready to view immediately without additional processing."],
      ["File size is 2 to 6 times larger than JPEG.", ""],
      ["Higher quality than JPEG due to uncompressed data.", "Lossy format with lower quality than raw files due to compression.m"],
      ["Visible lags", "Smoother stream"],
    ],
  }).render(document.getElementById("comparison-raw-jpeg"));
  
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
  
  customElements.define("comparison-raw-jpeg", TableComponent);
  