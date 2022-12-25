document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

function gotoCssBattle(link) {
  location.href = "./pages/cssbattle.html";
}
function gotoYoutubePage(link) {
  location.href = "./pages/youtube.html";
}
function gotoMarkdown(link) {
  location.href = "./pages/markdown.html";
}
