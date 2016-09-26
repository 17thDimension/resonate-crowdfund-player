var modal = document.getElementById('modal-container');

function closeModal() {
  modal.classList = [];
}

function openModal(type) {
  modal.className = 'open ' + type;
}
