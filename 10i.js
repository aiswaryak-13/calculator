let calculation=localStorage.getItem(`calculation`)||``;
      document.querySelector(`.screen`).innerHTML=calculation;
      
      function updateCalculation(number)
      {
        calculation+=number;
        document.querySelector(`.screen`).innerHTML=calculation;
        //console.log(calculation);
        localStorage.setItem(`calculation`,calculation);
      }

      /*function saveCalculation()
      {
        localStorage.setItem(`calculation`,calculation);
      }*/