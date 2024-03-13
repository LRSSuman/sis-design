const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const blurScreen = document.getElementById('blurScreen');
const closeSidebar = document.getElementById('closeSidebar');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-open');
    blurScreen.classList.toggle('blur-active');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-open');
    blurScreen.classList.remove('blur-active');
});

blurScreen.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-open');
    blurScreen.classList.remove('blur-active');
});
