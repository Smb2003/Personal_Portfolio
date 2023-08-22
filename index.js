let toggleBtn = document.getElementById("toggleBtn");
let toggleBtnClosed = document.getElementById("toggleBtnClosed");

document.getElementById("toggleBtn").addEventListener("click", function(){  
  event.preventDefault() 
          document.getElementById("toggleDisplayDiv").style.display = "block";
          document.getElementById("navbarLinksDropdown").style.display = "block";
          document.getElementById("navbarButtonDropdown").style.display = "block";
          document.getElementById("toggleBtn").style.display = "none";
          document.getElementById("toggleBtnClosed").style.display = "block";
          
     
    

})
document.getElementById("toggleBtnClosed").addEventListener("click", function(){
  event.preventDefault()
  setTimeout(() => {
  document.getElementById("toggleDisplayDiv").style.display = "none";
  document.getElementById("navbarLinksDropdown").style.display = "none";
  document.getElementById("navbarButtonDropdown").style.display = "none";
  document.getElementById("toggleBtn").style.display = "block";
  document.getElementById("toggleBtnClosed").style.display = "none";
}, 300);
})
