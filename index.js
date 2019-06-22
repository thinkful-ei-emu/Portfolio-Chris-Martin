/* global $*/

function removeHome() {
  $('.js-headline').addClass('hidden');
  $('.js-projects').addClass('hidden');
  $('.js-about-me').addClass('hidden');
  $('.js-navigation-list').removeClass('hidden');
  $('.page-footer').removeClass('hidden');
}

function addHome() {
  $('.js-headline').removeClass('hidden');
  $('.js-projects').removeClass('hidden');
  $('.js-about-me').removeClass('hidden');
  $('.js-navigation-list').addClass('hidden');
  $('.page-footer').addClass('hidden');
}

function handleAboutMeClick() {
  $('.js-about-me').click(event => {
    event.preventDefault();
    $('.projects-section').addClass('hidden');    
    $('.about-me-section').removeClass('hidden');
    removeHome();
  });
}

function handleProjectsClick() {
  $('.js-projects').click(event => {
    event.preventDefault();
    $('.about-me-section').addClass('hidden');
    $('.projects-section').removeClass('hidden');
    removeHome();
  });
}

function handleHomeClick() {
  $('.js-go-home').click(event => {
    event.preventDefault();
    $('.projects-section').addClass('hidden');
    $('.about-me-section').addClass('hidden');
    addHome();
  });
}

function main() {
  handleAboutMeClick();
  handleProjectsClick();
  removeHome();
  addHome();
  handleHomeClick();
}

$(main);