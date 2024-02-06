var da = document.getElementById("da");
var ne = document.getElementById("ne");
var ne2 = document.getElementById("ne2");
var vatromet = document.getElementById("vatromet");
vatromet.style.display = 'none';
ne === null || ne === void 0 ? void 0 : ne.addEventListener('click', function () {
    var i = Math.floor(Math.random() * 300) + 1;
    var j = Math.floor(Math.random() * 300) + 1;
    ne.style.left = i + "px";
    ne.style.top = j + "px";
    var currH = da.clientHeight;
    var currW = da.clientWidth;
    var size = da.style.fontSize;
    da.style.fontSize = size + 50 + "px";
    da.style.height = currH + 50 + "px";
    da.style.width = currW + 50 + "px";
});
ne2 === null || ne2 === void 0 ? void 0 : ne2.addEventListener('click', function () {
    window.open("https://www.youtube.com/watch?v=On79ElU4ecw");
    ne2.style.display = 'none';
    var i = Math.floor(Math.random() * 500) + 1;
    var j = Math.floor(Math.random() * 500) + 1;
    ne.style.left = i + "px";
    ne.style.top = j + "px";
    var currH = da.clientHeight;
    var currW = da.clientWidth;
    var size = da.style.fontSize;
    da.style.fontSize = size + 100 + "px";
    da.style.height = currH + 100 + "px";
    da.style.width = currW + 100 + "px";
});
da === null || da === void 0 ? void 0 : da.addEventListener('click', function () {
    vatromet.style.display = 'block';
    window.open("https://www.youtube.com/watch?v=M46_q_70Gfc");
});
