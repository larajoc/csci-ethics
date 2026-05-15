
document.addEventListener('DOMContentLoaded', () => {


  document.querySelectorAll('[data-reveals]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-reveals');
      const box = document.getElementById(targetId);
      if (!box) return;

      const isHidden = box.hidden;
      box.hidden = !isHidden;
      btn.textContent = isHidden ? 'Hide Analysis' : 'See Analysis';

      if (isHidden) {
        box.setAttribute('tabindex', '-1');
        box.focus();
      }
    });
  });

});
