function renderCircles(circles) {
    let myCircles = ' '
    for (i = 0; i < circles.length; i++ ){
    myCircles += `<div class="text-center mt-5" style=" width: ${circles[i].radius}px; height: ${circles[i].radius}px; background-color: ${circles[i].color}; border-radius: 50%">
     </div> `
    }
    return myCircles
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ]

    content.innerHTML = renderCircles(circlesAbstraction)
}