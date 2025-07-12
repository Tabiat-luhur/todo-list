const list = document.getElementById('myList');
const input = document.getElementById('itemInput');
const button = document.getElementById('addBtn');

button.addEventListener('click', function () {
  const value = input.value.trim();
  if (value !== '') {
    // Buat elemen <li>
    const li = document.createElement('li');
    li.textContent = value;

    // Buat tombol hapus
    let svg='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerHTML=svg;

    // Tambahkan event ke tombol
    deleteBtn.addEventListener('click', function () {
      li.remove(); // Menghapus <li> saat tombol diklik
    });

    // Tambahkan tombol ke <li>
    li.appendChild(deleteBtn);

    li.addEventListener('click', function(){
        this.classList.toggle('done');
    });

    // Tambahkan <li> ke <ul>
    list.appendChild(li);

    // Kosongkan input
    input.value = '';
  }
});