
function calculateDiameter(radius) {
    return radius * 2;
  }
  
  
  function changeCircleSize() {
    
    const radiusInput = document.getElementById('radiusInput');
    const radius = parseFloat(radiusInput.value);
  
    
    if (!isNaN(radius) && radius > 0) {
      
      const diameter = calculateDiameter(radius);
  
      
      const circle = document.getElementById('circle');
      circle.style.width = diameter + 'px';
      circle.style.height = diameter + 'px';
    } else {
      
      alert('Bitte geben Sie einen gültigen Radius ein.');
    }
  }
  