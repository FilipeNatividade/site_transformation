// ==================MENU===================

document.addEventListener('DOMContentLoaded', function () {
  let openNav = false;
  let navBarButton = document.getElementById('navBarButton');
  let navBar = document.querySelector('.nav_bar');

  navBarButton.addEventListener('click', function () {
    openNav = !openNav;
    navBar.style.display = openNav ? 'flex' : 'none';
  });
});