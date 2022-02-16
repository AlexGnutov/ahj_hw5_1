import PopButton from './pop-button/pop-button';

window.onload = () => {
  const container = document.getElementById('container');

  const sampleText = [
    'This is a short text...',
    'This is a bit longer text, but it has no meaning too...',
    'This text much longer, but it is only about the length of the text - nothing else...',
    'And this is a short one... once again...',
  ];

  const popoverContent1 = ['Sample header', sampleText[0], 'top'];
  const button1 = new PopButton('Popover on Top', popoverContent1);
  button1.bindToDom(container);

  const popoverContent2 = ['Sample header', sampleText[1], 'bottom'];
  const button2 = new PopButton('Popover on Bottom', popoverContent2);
  button2.bindToDom(container);

  const popoverContent3 = ['Sample header', sampleText[2], 'left'];
  const button3 = new PopButton('Popover on Left', popoverContent3);
  button3.bindToDom(container);

  const popoverContent4 = ['Sample header', sampleText[3], 'right'];
  const button4 = new PopButton('Popover on Right', popoverContent4);
  button4.bindToDom(container);
};
