var models = [
  {
    name: "Mercedes 4.18D",
    image: "/img/b102a1ce141d5a11e1281ffcd15fb04544e1d745.jpeg",
    link: "https://tr.wikipedia.org/wiki/Mercedes-Benz",
  },
  {
    name: "Mercedes Benz",
    image: "/img/2020-mercedes-benz-e-klasse.jpg",
    link: "https://tr.wikipedia.org/wiki/Mercedes-Benz",
  },
  {
    name: "Mercedes Benz v2.0",
    image: "/img/indir.jpg",
    link: "https://www.mercedes-benz-north-cyprus.com/passengercars/mercedes-benz-cars/models/e-class/coupe-c238/design.html",
  },
  {
    name: "Mercedes Benz EQB",
    image: "/img/1.jpg",
    link: "https://tr.wikipedia.org/wiki/Mercedes-Benz",
  },
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
  duration: "1000",
  random: false,
};

init(settings);

function init(settings) {
  var prev;
  interval = setInterval(function () {
    if (settings.random) {
      //random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (prev == index);
      prev = index;
      createSlides(index);
    } else {
      if (slaytCount == index) {
        index = 0;
      }
      createSlides(index);
      index++;
    }
  }, settings.duration);
}

function createSlides(index) {
  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}

const arrowLeft = document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    if (index > 0) {
      index--;
      createSlides(index);
    } else {
      index = slaytCount - 1;
      createSlides(index);
    }
  });

const arrowRight = document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    if (index >= slaytCount) {
      index = 0;
      createSlides(index);
    } else {
      createSlides(index);
    }
  });

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});
