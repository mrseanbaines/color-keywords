export default (value: string) => {
  const copyTextarea = document.createElement('textarea');
  copyTextarea.value = value;
  copyTextarea.style.position = 'fixed';
  copyTextarea.style.opacity = '0';
  copyTextarea.style.width = '0';
  copyTextarea.style.height = '0';
  copyTextarea.style.pointerEvents = 'none';
  document.body.appendChild(copyTextarea);
  copyTextarea.focus();
  copyTextarea.select();

  try {
    document.execCommand('copy');
  } catch (err) {
    throw new Error(err);
  } finally {
    copyTextarea.remove();
  }
};
