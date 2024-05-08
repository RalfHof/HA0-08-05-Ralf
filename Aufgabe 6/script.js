
function addImage(buttonNumber) {
    
    let imageUrl = '';
    if (buttonNumber === 1) {
      imageUrl = 'image1.jpg'; 
    } else if (buttonNumber === 2) {
      imageUrl = 'image2.jpg'; 
    } else if (buttonNumber === 3) {
      imageUrl = 'image3.jpg'; 
    }
  
    
    const img = document.createElement('img');
    img.src = imageUrl;
  
    
    const buttonDiv = document.getElementById('buttonDiv' + buttonNumber);
    buttonDiv.appendChild(img);
  }
  