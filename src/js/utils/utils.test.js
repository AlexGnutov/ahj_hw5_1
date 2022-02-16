/**
 * @jest-environment jsdom
 */

import { create } from './utils';
import PopButton from '../pop-button/pop-button';

test('Test create function', () => {
  const sample = window.document.createElement('div');
  sample.className = 'class';
  sample.innerText = 'text';
  const result = create('div', 'class', 'text');
  expect(result.outerHTML).toBe(sample.outerHTML);
});

test('Test popover appears', () => {
  const popoverData = ['Sample header', 'This is a short text...', 'top'];
  const button = new PopButton('Press me', popoverData);
  button.bindToDom(document.body);

  const popover = button.html().querySelector('.pop-common');
  expect(Array.from(popover.classList).includes('hidden')).toBeTruthy();

  button.html().click();
  expect(Array.from(popover.classList).includes('hidden')).toBeFalsy();

  button.html().click();
  expect(Array.from(popover.classList).includes('hidden')).toBeTruthy();
});
