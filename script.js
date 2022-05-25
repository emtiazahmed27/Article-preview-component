function toggle(){
    const x = document.getElementById("socialwrapper");
    const y=document.getElementById("wrapper-2");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display ="none";
    } else {
      x.style.display = "none";
      y.style.display ="flex";
    }
  }