document.querySelector("#payment").addEventListener("click", pay);
function pay() {
  // var cvv = document.querySelector("#password").value;
  // var card = document.querySelector("#card_number").value;
  // var years = document.querySelector("#years").value;
  // years = Number(years);


  
  // if (cvv.length != 3) {
  //   document.querySelector("#in_pass").textContent = "*Invalid Credential";

  // }
  // if (card.length != 16) {
  //   document.querySelector("#in_nm").textContent = "*Invalid Card Number";
    
  // }
  // if (years > 2022) {
  //   document.querySelector("#exp").textContent = "*Date Expired for this card";
    
  // } 
  
{
    window.location.href = "payment-done.html";
  }
}
