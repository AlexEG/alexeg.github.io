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

function gotoHTMLpage(link) {
  location.href = "./pages/html.html";
}
function gotoTesting(link) {
  location.href = "./pages/testing.html";
}
function gotoBooks(link) {
  location.href = "./pages/books.html";
}
function gotoManga(link) {
  location.href = "./pages/manga.html";
}

// manga pages

function manga1(link) {
  location.href = "/pages/manga.html";
}
function manga2(link) {
  location.href = "/pages/manga-sub-pages/manga2.html";
}
function manga3(link) {
  location.href = "/pages/manga-sub-pages/manga3.html";
}
function manga4(link) {
  location.href = "/pages/manga-sub-pages/manga4.html";
}

//HTML pages

function section1(link) {
  location.href = "#section1";
}
function section2(link) {
  location.href = "#section2";
}
function section3(link) {
  location.href = "#section3";
}
function section4(link) {
  location.href = "#section3";
}
function section5(link) {
  location.href = "#section3";
}
function section6(link) {
  location.href = "#section3";
}
function section7(link) {
  location.href = "#section3";
}
function section8(link) {
  location.href = "#section3";
}
function section9(link) {
  location.href = "#section3";
}
function section10(link) {
  location.href = "#section3";
}
