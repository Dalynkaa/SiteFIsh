var open;
function openNav() {
  if (open === true){
    open = false;
    document.body.classList.remove("open")
    console.log("close");
    return;
  }
  document.body.classList.toggle("open")
  console.log("open");
  open = true;
}


