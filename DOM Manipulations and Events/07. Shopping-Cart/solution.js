function solve() {
   let addButtons = document.querySelectorAll('.add-product');
   let total = 0;
   function addProduct(e){
      let product = e.target.parentElement.parentElement;
      let name = product.querySelector('.product-title').textContent;
      let money = product.querySelector('.product-line-price').textContent;
      total += money;
      let textArea = document.querySelector('textarea');
      textArea.textContent += `Added ${name} for ${money} to the cart.\n`;
   }

   function checkOut(e) {
      for (let button of addButtons) {
         button.removeEventListener('click', addProduct);
      }
   }

   for (let button of addButtons) {
      button.addEventListener('click', addProduct);
   }

   let checkout = document.querySelector('.checkout');
   checkout.addEventListener('click', checkOut);

}