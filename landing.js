const options = document.querySelectorAll('.option');
const finishBtn = document.querySelector('.btn.finish');
const returnBtn = document.querySelector('.return');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const footer = document.querySelector('.footer');
const footer1 = document.querySelector('.footer1');

options.forEach((option) => {
  option.addEventListener('click', () => {
    option.classList.toggle('active');
    const checkbox = option.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    updateFinishButton();
    updateFooterVisibility();
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    updateFinishButton();
    updateFooterVisibility();
  });
});

function updateFinishButton() {
  const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  finishBtn.disabled = checkedCheckboxes.length === 0;
  finishBtn.classList.toggle('finish', checkedCheckboxes.length > 0);
}

function updateFooterVisibility() {
  const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  if (checkedCheckboxes.length > 0) {
    footer.style.display = 'block';
    footer1.style.display = 'block';
  } else {
    footer.style.display = 'none';
    footer1.style.display = 'none';
  }
}

returnBtn.addEventListener('click', () => {
  options.forEach((option) => {
    option.classList.remove('active');
    const checkbox = option.querySelector('input[type="checkbox"]');
    checkbox.checked = false; 
  });
  updateFinishButton();
  updateFooterVisibility();
});

document.addEventListener("DOMContentLoaded", function() {

  const title = document.getElementById("title");
  title.classList.add("typewriter");

  const container = document.getElementById("container");
  container.classList.add("slide-in");
});


returnBtn.addEventListener('click', () => {
  window.location.href = "first.html";  
});


finishBtn.addEventListener('click', () => {
  window.location.href = "mail.html"; 
});

