//body = document.body
let h1 = document.getElementById('heading')
//console.log(h1);
h1.innerText = "Introduction to Dom and Events"
h1.style.color = "red"

let topics = ["variable","array", "functions", "scope"]

let ul = document.getElementById("course_content")

topics.forEach((course) => {
    let li = `<li>${course}</li>`
    ul.innerHTML += li
})
