const contents = document.querySelector('.contents-toggle');
const narrow = window.matchMedia('(max-width: 760px)');
function setContentsLayout() { if (contents) contents.open = !narrow.matches; }
setContentsLayout();
narrow.addEventListener('change', setContentsLayout);
