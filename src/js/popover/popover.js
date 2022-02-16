import { create } from '../utils/utils';



export default class Popover {
  constructor(header, text, position) {
    this.container = create('div', `pop-container-${position}`);
    this.container.classList.add('pop-common');
    this.preheader = create('div', 'pop-preheader');
    this.header = create('div', 'pop-header', header);
    this.blackBox = create('div', `pop-black-box-${position}`);
    this.text = create('div', 'pop-text', text);
    this.text.appendChild(this.blackBox);
    this.footer = create('div', 'pop-footer');
    this.arrow = create('div', `pop-arrow-${position}`);
    // Assemble
    this.container.append(
      this.preheader,
      this.header,
      this.text,
      this.footer,
      this.arrow,
    );
  }

  html() {
    return this.container;
  }
}
