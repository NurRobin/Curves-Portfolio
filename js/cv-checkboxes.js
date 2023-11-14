const checkboxes = document.querySelectorAll('input[type="checkbox"][name^="checkbox-"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const divs = document.querySelectorAll(`.cv-${checkbox.name.replace('checkbox-', '')}`);
    divs.forEach(div => {
      if (checkbox.checked) {
        div.classList.remove('cv-hidden');
        div.classList.add('cv-visible');
      } else {
        div.classList.remove('cv-visible');
        div.classList.add('cv-hidden');
      }
    });
  });
});

//on website load
window.addEventListener('load', () => {
  checkboxes.forEach(checkbox => {
    checkbox.dispatchEvent(new Event('change'));
  });
});