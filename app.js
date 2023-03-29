// my first commit, no changes here!

let attendance = ["Tri", "Jeremie", "Jeremiah", "Cassie"];

let main = document.getElementsByTagName("main");

for (let i = 0; i < attendance.length; i++) {
  let p = document.createElement("p");
  p.innerHTML = `Hello, my name is ${attendance[i]}`;
  main[0].appendChild(p);
}
