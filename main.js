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
let points = 0;
let pointsPerClick = 1;
if (localStorage.getItem('points')) {
    points = parseInt(localStorage.getItem('points'));
}

if (localStorage.getItem('pointsPerClick')) {
    pointsPerClick = parseInt(localStorage.getItem('pointsPerClick'));
}
displayPoints.innerHTML = points;
displayPointsPerClick.innerHTML = pointsPerClick;

level1.addEventListener("click", () =>{
    if (points > 10){
        pointsPerClick++;
        points -= 10;
        displayPoints.innerHTML = points;
        displayPointsPerClick.innerHTML = pointsPerClick;

        localStorage.setItem('points', points.toString());
        localStorage.setItem('pointsPerClick', pointsPerClick.toString());
    }
    else {
        alert("nie masz wystarczającej liczby punktów");
    } 
    
})

level2.addEventListener("click", () =>{
    if (points > 100){
        pointsPerClick += 10;
        points -= 100;
        displayPoints.innerHTML = points;
        displayPointsPerClick.innerHTML = pointsPerClick;

        localStorage.setItem('points', points.toString());
        localStorage.setItem('pointsPerClick', pointsPerClick.toString());
    }
    else {
        alert("nie masz wystarczającej liczby punktów");
    } 

})

level3.addEventListener("click", () =>{
    if (points > 1000){
        pointsPerClick += 100;
        points -= 1000;
        displayPoints.innerHTML = points;
        displayPointsPerClick.innerHTML = pointsPerClick;

        localStorage.setItem('points', points.toString());
        localStorage.setItem('pointsPerClick', pointsPerClick.toString());
    }
    else {
        alert("nie masz wystarczającej liczby punktów");
    } 
})

level4.addEventListener("click", () =>{
    if (points > 10000){
        pointsPerClick += 1000;
        points -= 10000;
        displayPoints.innerHTML = points;
        displayPointsPerClick.innerHTML = pointsPerClick;

        localStorage.setItem('points', points.toString());
        localStorage.setItem('pointsPerClick', pointsPerClick.toString());
    }
    else {
        alert("nie masz wystarczającej liczby punktów");
    } 
})

level5.addEventListener("click", () =>{
    if (points > 100000){
        pointsPerClick += 10000;
        points -= 100000;
        displayPoints.innerHTML = points;
        displayPointsPerClick.innerHTML = pointsPerClick;

        localStorage.setItem('points', points.toString());
        localStorage.setItem('pointsPerClick', pointsPerClick.toString());
    }
    else {
        alert("nie masz wystarczającej liczby punktów");
    } 
})

level6.addEventListener("click", () =>{
    if (points > 150000){
        pointsPerClick += 15000;
        points -= 150000;
        displayPoints.innerHTML = points;
        displayPointsPerClick.innerHTML = pointsPerClick;

        localStorage.setItem('points', points.toString());
        localStorage.setItem('pointsPerClick', pointsPerClick.toString());
    }
    else {
        alert("nie masz wystarczającej liczby punktów");
    } 
})

level7.addEventListener("click", () =>{
    if (points > 200000){
        pointsPerClick += 20000;
        points -= 200000;
        displayPoints.innerHTML = points;
        displayPointsPerClick.innerHTML = pointsPerClick;

        localStorage.setItem('points', points.toString());
        localStorage.setItem('pointsPerClick', pointsPerClick.toString());
    }
    else {
        alert("nie masz wystarczającej liczby punktów");
    } 
})


clicker.addEventListener("click", () => {
    points += pointsPerClick;
    displayPoints.innerHTML = points;
    displayPointsPerClick.innerHTML = pointsPerClick;

    localStorage.setItem('points', points.toString());
    localStorage.setItem('pointsPerClick', pointsPerClick.toString());

})

let logout = document.querySelector(".logout");
logout.addEventListener("click", () => {
    localStorage.removeItem("points");
    localStorage.removeItem("pointsPerClick");
})