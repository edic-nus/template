new gridjs.Grid({
  columns: ["No.", "Patient's Insights", "Identified Limitations"],
  data: [
    ["1", "\"I'm constantly worried I'll forget a dose. It's exhausting managing so many medications and keeping them all straight. I'm scared I'm making mistakes sometimes.\"", "Patients struggle to manage multiple medications with complex schedules, leading to confusion, anxiety, and a higher risk of missed doses or incorrect intake."],
    ["2", "\"I have many doubts to clarify but being left alone with my worries, not being able to reach anyone, just makes me feel very anxious and lost.\"", "(01) 22 888 4444"],
    ["3", "\"I do log in my vitals but without any feedback, I worry if I’m making any progress in my recovery journey, how long will it take?\"", "0097 22 654 00033"],
  ],
}).render(document.getElementById("table-1"));

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

customElements.define("table-component", TableComponent);
