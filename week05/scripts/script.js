const chapterInput = document.getElementById('chapterInput');
const addChapterBtn = document.getElementById('addChapterBtn');
const chapterList = document.getElementById('chapterList');

addChapterBtn.addEventListener('click', function() {
  const chapterText = chapterInput.value.trim();

  if (chapterText !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('span');

    li.textContent = chapterText;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete-button');

    li.appendChild(deleteButton);
    chapterList.appendChild(li);

    deleteButton.addEventListener('click', function() {
      chapterList.removeChild(li);
    });

    chapterInput.value = '';
    chapterInput.focus();
  }
});
