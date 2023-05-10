const addButton = document.getElementById('add-btn');
const removeButton = document.getElementById('remove-btn');
const textArea = document.getElementById('text-area');
const outputArea = document.getElementById('output-area');
let originalText = '';

addButton.addEventListener('click', () => {
  originalText = textArea.value;
  outputArea.innerText = originalText;
});

removeButton.addEventListener('click', () => {
  textArea.value = originalText;
  outputArea.innerText = '';
});