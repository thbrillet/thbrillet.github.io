function DomLoadedCM() {
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log('DOM Content Loaded');
    mainText();
  });
}

function mainText(){
  setTimeout(opacityTimeOut.bind(null, '.main-text-container', '1'), 1500);
  setTimeout(opacityTimeOut.bind(null, '.blur-text-1-container', '1'), 2000);
  setTimeout(opacityTimeOut.bind(null, '.blur-text-2-container', '1'), 2500);

  setTimeout(opacityTimeOut.bind(null, '.main-text-container', '0'), 5000);
  setTimeout(opacityTimeOut.bind(null, '.blur-text-1-container', '0'), 4000);
  setTimeout(opacityTimeOut.bind(null, '.blur-text-2-container', '0'), 4500);

  setTimeout(changeTextTimeOut.bind(null, '.main-text', 'quel heureux hasard vous amène ici ?'), 6500);
  setTimeout(changeTextTimeOut.bind(null, '.blur-text-1', 'quel heureux hasard vous amène ici ?'), 5500);
  setTimeout(changeTextTimeOut.bind(null, '.blur-text-2', 'quel heureux hasard vous amène ici ?'), 6000);

  setTimeout(opacityTimeOut.bind(null, '.main-text-container', '1'), 8000);
  setTimeout(opacityTimeOut.bind(null, '.blur-text-1-container', '1'), 8500);
  setTimeout(opacityTimeOut.bind(null, '.blur-text-2-container', '1'), 9000);
}

function opacityTimeOut(divSelector, opacity){
  document.querySelector(divSelector).style.opacity = opacity;
}

function changeTextTimeOut(divSelector, text){
  document.querySelector(divSelector).innerHTML = text;
}

DomLoadedCM();
