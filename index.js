const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const blurScreen = document.getElementById('blurScreen');
const closeSidebar = document.getElementById('closeSidebar');
const body = document.getElementById('body');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-open');
    blurScreen.classList.toggle('blur-active');
    body.classList.toggle('no-scroll');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-open');
    blurScreen.classList.remove('blur-active');
    body.classList.remove('no-scroll');
});

blurScreen.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-open');
    blurScreen.classList.remove('blur-active');
    body.classList.remove('no-scroll');
});
