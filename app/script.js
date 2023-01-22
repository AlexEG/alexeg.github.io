document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

// HOME

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
  location.href = "https://alexeg.github.io/YourManga/";
}
function gotoAniyomi(link) {
  location.href = "./pages/aniyomi.html";
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

//HTML sub pages

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



//light Dark Mode

const lightDarkMode =document.querySelector('#lightDarkMode');
const mangaBody =document.querySelector('#mangaBody');

lightDarkMode.addEventListener("click", function () {
  // mangaBody.toggleClass("light-theme")

  if (mangaBody.classList.contains("light-theme")) {
    mangaBody.classList.remove("light-theme");
  } else {
    mangaBody.classList.add("light-theme");
  }


});




















