const registerBtn = document.querySelector(".register-btn"); 

registerBtn.addEventListener("click", (e) => {
  //prevenir el envío
  e.preventDefault();

  //Obtener datos ingresados
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const legalAgeOptions = document.getElementsByName("legalAge")
  let age = false;
  legalAgeOptions.forEach(function(element){
    if (element.checked==true){
      age = element.value;
      console.log(age)
    }
  })
});


  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  // 2. Obtenemos los datos ingresados en el input de password
  // 3. Obtenemos el valor del input radio
  // 4. Obtenemos el valor del input checkbox
  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.