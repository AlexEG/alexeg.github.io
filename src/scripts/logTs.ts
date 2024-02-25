console.log("Log from TS file");

function log() {
  const text = document.querySelector("a")?.textContent;
  console.log("text from page", text);
}

log();
