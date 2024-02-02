// const email = document.querySelector('#email');
// const emailConfirmation = document.querySelector('#emailComfirmation');
// const pseudo = document.querySelector('#pseudo');

// let emailValidation = false ;
// email.addEventListener('input', function(){
//     const value = email.value.trim();
    
//     if(value !==""){
//         if(!/^^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}/.test(value)){
//             emailValidation = "true";
//         }
//         else{
//             emailConfirmation.innerHTML = 'entrez E-mail valide';
//             emailValidation = false;
//         }
//     }
//     else{
//         emailValidation = false;
//         emailConfirmation.innerHTML = 'Le pseudo ne peut pas être vide.';
//     }
// })
// pseudo.addEventListener('input', function(){
//     const value = pseudo.value.trim();
//     if(value !== ""){
        
//     }
// })
const toggleButton = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});

const cartes = document.querySelectorAll(".card");

cartes.forEach( carte => {
  let bool = false;

  carte.addEventListener("click", function(){
    carte.children[1].style.background = "red";
    
    bool = !bool;
    console.log(bool);

    if (!bool) {
      console.log("cdcdcdc" + bool);
    }
  });

  carte.addEventListener("mousemove", e => {
    if (!bool) {
      let rectCarte = carte.getBoundingClientRect();
      let x = e.clientX - rectCarte.x;
      let y = e.clientY - rectCarte.y;

      let milieuX = rectCarte.width / 2;
      let milieuY = rectCarte.height / 2;

      let angleX = -(x - milieuX) / 10;
      let angleY = (y - milieuY) / 10;

      let refletX = (x / rectCarte.width * 100);
      let refletY = (y / rectCarte.height * 100);

      carte.children[0].style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
      carte.children[1].style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
      carte.children[1].style.background = `radial-gradient(circle at ${refletX}% ${refletY}%, rgba(146, 255, 155, 0.558), transparent)`;
    }
  });

  carte.addEventListener("mouseleave", e => {
    if (!bool) {
      carte.children[0].style.transform = 'rotateX(0) rotateY(0)';
      carte.children[1].style.transform = 'rotateX(0) rotateY(0)';
      carte.children[1].style.background = '';
    }
  });
});
