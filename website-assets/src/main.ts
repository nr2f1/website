const buttons: HTMLButtonElement[] = Array.from(
  document.querySelectorAll('.logos p button'),
);

const copyTextToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Error in copying text: ', err);
  }
};

const changeButtonToCopied = (button: HTMLButtonElement) =>
  button.classList.add('copied');

const copyUrl = async (event: MouseEvent) => {
  event.preventDefault();
  const element = event.target as HTMLButtonElement;
  if (element) {
    const textToCopy = element.innerText;
    await copyTextToClipboard(textToCopy);
    changeButtonToCopied(element);
  }
};

for (const button of buttons) {
  button.addEventListener('click', copyUrl);
}
