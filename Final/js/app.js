function toggleText() {
    let visibleContainer = document.querySelector('.container:not([style*="none"])');
    visibleContainer.style.display = 'none';
    visibleContainer.nextElementSibling.style.display = 'flex';
}

function goBack() {
  let visibleContainer = document.querySelector('.container:not([style*="none"])');
  visibleContainer.previousElementSibling.style.display = 'flex';
  visibleContainer.style.display = 'none';
}

