const list = document.getElementById('myList');
const input = document.getElementById('itemInput');
const button = document.getElementById('addBtn');
const motivasi = document.getElementById('motivasiText');

function updateMotivasi() {
  if (list.children.length === 0) {
    motivasi.style.display = 'block';
  } else {
    motivasi.style.display = 'none';
  }
}

button.addEventListener('click', function () {
  const value = input.value.trim();
  if (value !== '') {
    const li = document.createElement('li');
    li.textContent = value;

    const deleteBtn = document.createElement('button');
    let svg='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerHTML=svg;

    deleteBtn.addEventListener('click', function () {
      li.remove(); 
      updateMotivasi();
    });

    li.appendChild(deleteBtn);

    li.addEventListener('click', function(){
        this.classList.toggle('done');
    });

    list.appendChild(li);

    input.value = '';
    updateMotivasi();
  }
});