function saveOptions(e) {
  browser.storage.sync.set({
    description: document.querySelector("#description").value ,
    template: document.querySelector("#template").value
  });
  e.preventDefault();
}

function restoreOptions() {

  var getting_description = browser.storage.sync.get('description');
  var getting_template = browser.storage.sync.get('template');
  
  getting_description.then((res) => {
    document.querySelector("#description").value = res.description || 'copy markdown link';
  });
  getting_template.then((res) => {
    document.querySelector("#template").value = res.template || '[$LINKTEXT]($URL)';
  });
}

function prefillOptions(e) {
  document.querySelector("#description").value    = this.querySelector(".description").value;
  document.querySelector("#template").value       = this.querySelector(".template").value;
  e.preventDefault();
}

function loadPrefillOptions() {
  var examples = document.querySelectorAll(".examples");
  for (let i = 0; i < examples.length; i++) {
    examples[i].addEventListener("submit", prefillOptions);
  }
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
document.addEventListener('DOMContentLoaded', loadPrefillOptions);