  document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}



function gotoCssBattle(link){
  location.href = "./assets/cssbattle/cssbattle.html";
}
function gotoYoutubePage(link){
  location.href = "./pages/youtube.html";
}


/*
let navbarList = document.getElementById('navbarList')
navbarList.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 380);
  }
});
*/