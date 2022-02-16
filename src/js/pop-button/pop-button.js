import { create } from '../utils/utils';
import Popover from '../popover/popover';

export default class PopButton {
  constructor(text, popover) {
    this.container = create('button', 'pop-button', text);
    this.popopover = new Popover(...popover);
    this.container.append(this.popopover.html());
    this.container.addEventListener('click', (e) => {
      this.clickHandler(e);
    });
  }

  html() {
    return this.container;
  }

  bindToDom(parentElement) {
    parentElement.appendChild(this.container);
    this.popopover.html().classList.add('hidden');
  }

  clickHandler() {
    this.popopover.html().classList.toggle('hidden');
  }
}
