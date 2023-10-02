let clicker = document.querySelector(".click");
let displayPoints = document.querySelectorAll("span")[0];
let displayPointsPerClick = document.querySelectorAll("span")[1];
let level1 = document.querySelector(".level1");
let level2 = document.querySelector(".level2");
let level3 = document.querySelector(".level3");
let level4 = document.querySelector(".level4");
let level5 = document.querySelector(".level5");
let level6 = document.querySelector(".level6");
let level7 = document.querySelector(".level7");
let pricel1 = document.querySelector(".pricel1");
let pricel2 = document.querySelector(".pricel2");
let pricel3 = document.querySelector(".pricel3");
let pricel4 = document.querySelector(".pricel4");
let pricel5 = document.querySelector(".pricel5");
let pricel6 = document.querySelector(".pricel6");
let pricel7 = document.querySelector(".pricel7");
let amount1 = document.querySelector(".amount1");
let amount2 = document.querySelector(".amount2");
let amount3 = document.querySelector(".amount3");
let amount4 = document.querySelector(".amount4");
let amount5 = document.querySelector(".amount5");
let amount6 = document.querySelector(".amount6");
let amount7 = document.querySelector(".amount7");
let points = 0;
let pointsPerClick = 1;
let wzorlv1 = 10;
let wzorlv2 = 250;
let wzorlv3 = 1000;
let wzorlv4 = 35000;
let wzorlv5 = 125000;
let wzorlv6 = 825000;
let wzorlv7 = 5000000;
let N1 = 0;
let N2 = 0;
let N3 = 0;
let N4 = 0;
let N5 = 0;
let N6 = 0;
let N7 = 0;

if (localStorage.getItem("N1")) {
  N1 = parseInt(localStorage.getItem("N1"));
}
if (localStorage.getItem("N2")) {
  N2 = parseInt(localStorage.getItem("N2"));
}
if (localStorage.getItem("N3")) {
  N3 = parseInt(localStorage.getItem("N3"));
}
if (localStorage.getItem("N4")) {
  N4 = parseInt(localStorage.getItem("N4"));
}
if (localStorage.getItem("N5")) {
  N5 = parseInt(localStorage.getItem("N5"));
}
if (localStorage.getItem("N6")) {
  N6 = parseInt(localStorage.getItem("N6"));
}
if (localStorage.getItem("N7")) {
  N7 = parseInt(localStorage.getItem("N7"));
}
if (localStorage.getItem("points")) {
  points = parseInt(localStorage.getItem("points"));
}
if (localStorage.getItem("pointsPerClick")) {
  pointsPerClick = parseInt(localStorage.getItem("pointsPerClick"));
}

displayPoints.innerHTML = Math.floor(points);
displayPointsPerClick.innerHTML = pointsPerClick;

pricel1.innerHTML = Math.floor(10 * (1 + 0.2 * Math.pow(N1, 1.5)));
amount1.innerHTML = N1;

pricel2.innerHTML = Math.floor(250 * (1 + 0.2 * Math.pow(N2, 1.5)));
amount2.innerHTML = N2;

pricel3.innerHTML = Math.floor(1000 * (1 + 0.2 * Math.pow(N3, 1.5)));
amount3.innerHTML = N3;

pricel4.innerHTML = Math.floor(35000 * (1 + 0.2 * Math.pow(N4, 1.5)));
amount4.innerHTML = N4;

pricel5.innerHTML = Math.floor(125000 * (1 + 0.2 * Math.pow(N5, 1.5)));
amount5.innerHTML = N5;

pricel6.innerHTML = Math.floor(825000 * (1 + 0.2 * Math.pow(N6, 1.5)));
amount6.innerHTML = N6;

pricel7.innerHTML = Math.floor(5000000 * (1 + 0.2 * Math.pow(N7, 1.5)));
amount7.innerHTML = N7;
//level1
level1.addEventListener("click", () => {
  if (points >= 10 * (1 + 0.2 * Math.pow(N1, 1.5))) {
    let wzorlv1 = 10 * (1 + 0.2 * Math.pow(N1, 1.5));
    pointsPerClick++;
    points -= wzorlv1;
    displayPoints.innerHTML = Math.floor(points);
    displayPointsPerClick.innerHTML = pointsPerClick;
    N1++;
    amount1.innerHTML = N1;
    localStorage.setItem("N1", N1.toString());
    localStorage.setItem("points", points.toString());
    localStorage.setItem("pointsPerClick", pointsPerClick.toString());
  } else {
    alert("nie masz wystarczającej liczby punktów");
  }
  pricel1.innerHTML = Math.floor(10 * (1 + 0.2 * Math.pow(N1, 1.5)));
});

//level2
level2.addEventListener("click", () => {
  if (points >= 250 * (1 + 0.2 * Math.pow(N2, 1.5))) {
    let wzorlv2 = 250 * (1 + 0.2 * Math.pow(N2, 1.5));
    pointsPerClick += 5;
    points -= wzorlv2;
    displayPoints.innerHTML = Math.floor(points);
    displayPointsPerClick.innerHTML = pointsPerClick;
    N2++;
    amount2.innerHTML = N2;
    localStorage.setItem("N2", N2.toString());
    localStorage.setItem("points", points.toString());
    localStorage.setItem("pointsPerClick", pointsPerClick.toString());
  } else {
    alert("nie masz wystarczającej liczby punktów");
  }
  pricel2.innerHTML = Math.floor(250 * (1 + 0.2 * Math.pow(N2, 1.5)));
});
//level3
level3.addEventListener("click", () => {
  if (points >= 1000 * (1 + 0.2 * Math.pow(N3, 1.5))) {
    let wzorlv3 = 1000 * (1 + 0.2 * Math.pow(N3, 1.5));
    pointsPerClick += 20;
    points -= wzorlv3;
    displayPoints.innerHTML = Math.floor(points);
    displayPointsPerClick.innerHTML = pointsPerClick;
    N3++;
    amount3.innerHTML = N3;
    localStorage.setItem("N3", N3.toString());
    localStorage.setItem("points", points.toString());
    localStorage.setItem("pointsPerClick", pointsPerClick.toString());
  } else {
    alert("nie masz wystarczającej liczby punktów");
  }
  pricel3.innerHTML = Math.floor(1000 * (1 + 0.2 * Math.pow(N3, 1.5)));
});
//level4
level4.addEventListener("click", () => {
  if (points >= 35000 * (1 + 0.2 * Math.pow(N4, 1.5))) {
    let wzorlv4 = 35000 * (1 + 0.2 * Math.pow(N4, 1.5));
    pointsPerClick += 45;
    points -= wzorlv4;
    displayPoints.innerHTML = Math.floor(points);
    displayPointsPerClick.innerHTML = pointsPerClick;
    N4++;
    amount4.innerHTML = N4;
    localStorage.setItem("N4", N4.toString());
    localStorage.setItem("points", points.toString());
    localStorage.setItem("pointsPerClick", pointsPerClick.toString());
  } else {
    alert("nie masz wystarczającej liczby punktów");
  }
  pricel4.innerHTML = Math.floor(35000 * (1 + 0.2 * Math.pow(N4, 1.5)));
});
//level5
level5.addEventListener("click", () => {
  if (points >= 125000 * (1 + 0.2 * Math.pow(N5, 1.5))) {
    let wzorlv5 = 125000 * (1 + 0.2 * Math.pow(N5, 1.5));
    pointsPerClick += 100;
    points -= wzorlv5;
    displayPoints.innerHTML = Math.floor(points);
    displayPointsPerClick.innerHTML = pointsPerClick;
    N5++;
    amount5.innerHTML = N5;
    localStorage.setItem("N5", N5.toString());
    localStorage.setItem("points", points.toString());
    localStorage.setItem("pointsPerClick", pointsPerClick.toString());
  } else {
    alert("nie masz wystarczającej liczby punktów");
  }
  pricel5.innerHTML = Math.floor(125000 * (1 + 0.2 * Math.pow(N5, 1.5)));
});
//level6
level6.addEventListener("click", () => {
  if (points >= 825000 * (1 + 0.2 * Math.pow(N6, 1.5))) {
    let wzorlv6 = 825000 * (1 + 0.2 * Math.pow(N6, 1.5));
    pointsPerClick += 250;
    points -= wzorlv6;
    displayPoints.innerHTML = Math.floor(points);
    displayPointsPerClick.innerHTML = pointsPerClick;
    N6++;
    amount6.innerHTML = N6;
    localStorage.setItem("N6", N6.toString());
    localStorage.setItem("points", points.toString());
    localStorage.setItem("pointsPerClick", pointsPerClick.toString());
  } else {
    alert("nie masz wystarczającej liczby punktów");
  }
  pricel6.innerHTML = Math.floor(825000 * (1 + 0.2 * Math.pow(N6, 1.5)));
});
//level7
level7.addEventListener("click", () => {
  if (points >= 5000000 * (1 + 0.2 * Math.pow(N7, 1.5))) {
    let wzorlv7 = 5000000 * (1 + 0.2 * Math.pow(N7, 1.5));
    pointsPerClick += 750;
    points -= wzorlv7;
    displayPoints.innerHTML = Math.floor(points);
    displayPointsPerClick.innerHTML = pointsPerClick;
    N7++;
    amount7.innerHTML = N7;
    localStorage.setItem("N7", N7.toString());
    localStorage.setItem("points", points.toString());
    localStorage.setItem("pointsPerClick", pointsPerClick.toString());
  } else {
    alert("nie masz wystarczającej liczby punktów");
  }
  pricel7.innerHTML = Math.floor(5000000 * (1 + 0.2 * Math.pow(N7, 1.5)));
});

let logout = document.querySelector(".logout");

let hiddenInput = document.querySelector(".hidden");

clicker.addEventListener("click", () => {
  points += pointsPerClick;
  displayPoints.innerHTML = Math.floor(points);
  displayPointsPerClick.innerHTML = pointsPerClick;
  Math.floor(points);
  hiddenInput.setAttribute("value", points);
  localStorage.setItem("points", points.toString());
  localStorage.setItem("pointsPerClick", pointsPerClick.toString());
});
let form = document.querySelector(".form");
let save = document.querySelector(".save");

save.addEventListener("click", () => {
      form.submit();
});

logout.addEventListener("click", () => {
  localStorage.clear();
})
