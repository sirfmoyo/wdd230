const input = document.getElementById('chapter-input');
const button = document.getElementById('add-chapter-btn');
const list = document.getElementById('chapter-list');

button.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    li.textContent = input.value;
    deleteBtn.textContent = '❌';
    li.appendChild(deleteBtn);
    list.appendChild(li);
    deleteBtn.addEventListener('click', function() {
      li.remove();
    });
    input.focus();
    input.value = '';
  }
});
