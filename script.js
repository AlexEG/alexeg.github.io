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

// // funcation to add smooth behavior to side bar links
// function smooth() {
//   // Scroll to a certain element
//   document.getElementById("kicking-the-tire").scrollIntoView({
//     behavior: "smooth",
//   });
// }

// let anchorlinks = document.querySelectorAll('a[href^="#"]');
// for (let item of anchorlinks) {
//   // relitere
//   item.addEventListener("click", (e) => {
//     let hashval = item.getAttribute("href");
//     let target = document.querySelector(hashval);
//     target.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//     history.pushState(null, null, hashval);
//     e.preventDefault();
//   });
// }

// let testone = document.getElementById("what-is-markdown");
// function test() {
//   testone.scrollIntoView({
//     behavior: "smooth",
//     block: "center",
//   });
// }
