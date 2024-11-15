new gridjs.Grid({
    columns: ["Week", "Date", "Key Events", "Location"],
    data: [
      ["4", "10-02-2025", "Test 1", "Utown Indoor Sports Hall"],
      ["6", "23-02-2025", "Test 2 + Team Challenge Video Recording Video editing", "Utown Indoor Sports Hall"],
      ["Recess", "24-02-2025", "Submission Deadline: Team  Challenge Video [28-02-2025]", ""],
      ["7", "09-03-2025", "Test 3", "Utown Indoor Sports Hall"],
      ["10", "23-03-2025", "[TBC] Competition Challenge and Competition Presentation", ""],
 ],
  }).render(document.getElementById("key-events"));
  
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
  
  customElements.define("key-events", TableComponent);
  