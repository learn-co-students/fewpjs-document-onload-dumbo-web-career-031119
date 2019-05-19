let paragraph = document.querySelector('#text');

document.addEventListener('DOMContentLoaded', function(e) {
newDOM()
console.log("the DOM has loaded");
});

const newDOM = () => {
  paragraph.textContent = "This is really cool!"

}
