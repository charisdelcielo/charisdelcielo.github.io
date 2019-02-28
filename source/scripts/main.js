/* side bar nav */
var nav = document.getElementById("navigation");
var menu = document.getElementById("menu-icon");
var menuList = document.getElementById("horizontal-list");

var offsetMenu = menu.offsetTop;

function openNavBar() {

  var width = window.innerWidth;

  if (window.innerWidth > 600) {
    if (menu.classList.contains("open")) {
      menuList.style.opacity = "0.5"
      nav.style.width = "0";
      menu.classList.remove("open");
    }

    else {
      nav.style.width = "270px";
      menu.classList.add("open");
      setTimeout(function(){
          menuList.style.opacity = "1";
      }, 350);
    }
  }

  else {
    if (menu.classList.contains("open")) {
      menuList.style.opacity = "0.5"
      nav.style.width = "0";
      menu.classList.remove("open");
    }

    else {
      nav.style.width = "100%";
      menu.classList.add("open");
      setTimeout(function(){
          menuList.style.opacity = "1";
        },350);
    }

  }

};

/* navigate to about or contact through menu */
var about = document.getElementById('about'),
    contact = document.getElementById('contact');

function gotoAbout() {
  window.scrollTo({top: about.offsetTop});
  nav.style.width = "0";
  menu.classList.remove("open");
}

function gotoContact() {
  window.scrollTo({top: contact.offsetTop});
  nav.style.width = "0";
  menu.classList.remove("open");
}

/* navigate to about or contact from other pages besides index.html */
function gotoAboutFrom() {
  document.location = "http://charisryu.com/index.html#about";
  nav.style.width = "0";
  menu.classList.remove("open");
}

function gotoContactFrom() {
  document.location = "http://charisryu.com/index.html#contact";
  window.scrollTo({top: contact.offsetTop});
  nav.style.width = "0";
  menu.classList.remove("open");
}



/*sticky menu icon*/
window.onscroll = function() {
  stickyFunction();
};

function stickyFunction() {
  if (window.pageYOffset > offsetMenu) {
    menu.classList.add("fixed")
  }
  else {
    menu.classList.remove("fixed")
  }
}

/* download opico */
document.getElementById("opico-apple").onclick = function() {
  window.open("https://itunes.apple.com/us/app/opico/id1215993252");
}
document.getElementById("opico-android").onclick = function() {
  window.open("https://play.google.com/store/apps/details?id=com.opico&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1");
}

/*
document.getElementsByClassName("menu-icon").onclick = function() {
  nav.classList.add("opened");
};

document.getElementById("close-icon").onclick = function() {
  nav.classList.remove("opened");
};*/

/* hover over charis */
