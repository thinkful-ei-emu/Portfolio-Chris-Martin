/* global store, $, api*/

function generateAboutMe() {

}

function generateProjects() {

}

function handleAboutMeClick() {
  $('.js-about-me').click(event => {
    event.preventDefault();
    $('#js-submit-bookmark-form').removeClass('hidden');
    $('.js-projects').addClass('hidden');
  });
}

function handleProjectsClick() {
  $('.js-projects').click(event => {
    event.preventDefault();
    $('#js-submit-bookmark-form').removeClass('hidden');
    $('.js-about-me').addClass('hidden');
  });
}

function main() {
  
}

$(main);