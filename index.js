// Tính điểm trung bình và điểm tổng
function calpoint() {
    let p = parseInt(document.getElementById("physics").value);
    let c = parseInt(document.getElementById("chemistry").value);
    let b = parseInt(document.getElementById("biology").value);
    let total = p + c + b
    let avg = total / 3
    document.getElementById("avgpts").innerText = `Điểm Trung bình: ${avg}`;
    document.getElementById("totalpts").innerText = `Điểm Tổng: ${total}`;
}

// Đổi C sang F
function convertCtoF() {
    let cel = parseInt(document.getElementById("celsius").value);
    let fah = cel * 9 / 5 + 32
    document.getElementById("Fahrenheit").innerText = `Result: ${fah} °F`;
}

//Tính diện tích hình tròn
function calAreofcircle() {
    let cradius = parseInt(document.getElementById("radius").value);
    let carea = cradius * cradius * 3.14
    let cccf = cradius * 2 * 3.14
    document.getElementById("circlearea").innerText = `Diện tích: ${carea} cm`;
    document.getElementById("circlecircumference").innerText = `Diện tích: ${cccf} cm`;
}