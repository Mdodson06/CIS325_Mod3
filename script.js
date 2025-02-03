window.addEventListener('DOMContentLoaded', function(){
    let clickBtn = this.document.getElementById("clickBtn");
    clickBtn.addEventListener('click',()=>{
        let curr = document.getElementById("mouseoverImg");
        if (curr.innerHTML.includes("rickroll.gif")) {
            curr.innerHTML = '<img src="thegame.jpg" alt="You just lost the game">';
        } else {
            curr.innerHTML = '<img src="rickroll.gif" alt="Never gonna give you up">';
        }
    });
});

function displayTitle(){
    let img = document.getElementById("mouseoverImg");
    let i_alt = img.innerHTML.indexOf("alt=") + 4;
    let title = img.innerHTML.substring(i_alt, img.innerHTML.indexOf(">"));
    alert(title);
}

function customFunction(){
    console.log("Changed the picture");
}