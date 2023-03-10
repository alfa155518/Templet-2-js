// start settings box
let lanDing = document.querySelector(".landing");

const imaGes = ["back1.jpg", "back2.jpg", "back3.jpg", "back4.jpg"];

let backgroundRandom = true;

let interval;

function randomize() {
  interval = setInterval(() => {
    let random = Math.floor(Math.random() * imaGes.length);
    lanDing.style.backgroundImage = `url(images/` + imaGes[random] + `)`;
  }, 1000);
}


let faGear = document.querySelector(".settings-box .box i");
faGear.onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("open");
};

let randomBackground = document.querySelectorAll(
  ".option-box .random-option span"
);

randomBackground.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.target.dataset.random === `qwe`) {
      backgroundRandom = true;
      randomize();
    } else {
      backgroundRandom === false;
      clearInterval(interval);
    }
  });
});

// end settings box

// start list links
let linksUl = document.querySelector(".links ul");
let all = true;
let linksLi = document.querySelectorAll(".links ul li");
let tooGle = document.querySelectorAll(".links .toggle p");

tooGle.forEach((p) => {
  p.addEventListener("click", (e) => {
    e.stopPropagation();
    if (all == true) {
      linksUl.classList.toggle("appear");
    } else {
      linksUl.classList.remove("appear");
    }
  });
});

document.addEventListener("click", (e) => {
  if (e.target !== linksUl) {
    linksUl.classList.toggle("appear");
    linksUl.classList.remove("appear");
  }
});

// end list links

// start typed js

var typed = new Typed(".mov", {
  strings: [, "To be in Top", "you must do hard work"],
  typeSpeed: 80,
  backSpeed: 70,
  loop: true,
});

// end typed js

// start about
let text = document.querySelector(".about .text");
let list = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px 0px 0px",
};
const textObs = new IntersectionObserver(function (entrais, observer) {
  if (!entrais.isIntersecting) {
    text.classList.add("appear");
  } else {
    text.classList.remove("appear");
  }
}, list);
textObs.observe(text);
// end about
// start tittle
let titTile = document.title;
window.onblur = function () {
  document.title = "click her to inter page";
};
window.onfocus = function () {
  document.title = titTile;
};

// end tittle

// start skills

let skiLls = document.querySelector(".skills");
let scrollTop = document.querySelector(".scroll-top");

window.onscroll = function () {
  if (window.scrollY >= 500) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }

  let ofSetTop = skiLls.offsetTop;
  let ofSetHeight = skiLls.offsetHeight;
  let irrHeight = window.innerHeight;
  let pageOf = window.pageYOffset;

  if (pageOf > ofSetTop + ofSetHeight - irrHeight) {
    document
      .querySelectorAll(".skills-box .skills-progress span")
      .forEach((skill) => {
        skill.style.width = skill.dataset.progress;
      });
  }
};

scrollTop.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// end skills
// start gallery
let imagAll = document.querySelectorAll(".gallery .images img");

const option = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -300px 0px",
};

const imageObserver = new IntersectionObserver(function (entrais, observer) {
  entrais.forEach((entry) => {
    if (entry.isIntersecting) {
      let img = entry.target;

      img.setAttribute("src", img.getAttribute("data-src"));

      imageObserver.unobserve(img);
    } else {
      return;
    }
  });
}, option);

imagAll.forEach((img) => {
  imageObserver.observe(img);
});

imagAll.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overLay = document.createElement("div");

    overLay.className = "overlay";

    document.body.appendChild(overLay);

    let divButton = document.createElement("div");

    divButton.className = `divbutton`;

    let closeButton = document.createTextNode("X");

    divButton.appendChild(closeButton);

    overLay.appendChild(divButton);

    let popupBox = document.createElement("div");

    popupBox.className = `popup-box`;

    overLay.appendChild(popupBox);

    var imagePopup = document.createElement("img");

    imagePopup.src = img.src;

    popupBox.appendChild(imagePopup);

    document.addEventListener("click", (e) => {
      if (e.target.className === "divbutton") {
        document.querySelector(".overlay").remove();
      }
    });
  });
});

// end gallery

// start time line

const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -400px 0px",
};

let timelineAll = document.querySelectorAll(
  ".timeline .timeline-container .left"
);
let timeAll = document.querySelectorAll(".timeline .timeline-container .right");

const allTimeline = new IntersectionObserver(function (entrais, observer) {
  entrais.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
    } else {
      entry.target.classList.remove("appear");
    }
  });
}, options);

timelineAll.forEach((left) => {
  allTimeline.observe(left);
});

timeAll.forEach((right) => {
  allTimeline.observe(right);
});

// end time line

// start contact-us

let allInputs = document.querySelectorAll(".contact .left form input");

allInputs.forEach((input) => {
  input.onfocus = function (e) {
    if (input.value !== "") {
      e.target.style.borderColor = "green";
    } else {
      e.target.style.borderColor = "red";

      input.onblur = function (e) {
        if (input.value !== "") {
          e.target.style.borderColor = "green";
        }
      };
    }
  };
});

// end contact-us
