//Se estÃ¡n importando las funciones necesarias del SDK de Firebase para la inicializaciÃ³n de la aplicaciÃ³n y 
//la autenticaciÃ³n de usuarios. Esto proporciona las herramientas necesarias para interactuar con Firebase Authentication.

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//Se define la configuraciÃ³n de Firebase, que incluye informaciÃ³n como la clave de API, 
//el dominio de autenticaciÃ³n, el ID del proyecto, etc. Luego, se inicializa la aplicaciÃ³n de Firebase con esta configuraciÃ³n y se obtiene una instancia de autenticaciÃ³n.

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGrgKn3QKRTFSgZdW7zqMRlw9JRz21O8I",
    authDomain: "login-e5b39.firebaseapp.com",
    projectId: "login-e5b39",
    storageBucket: "login-e5b39.appspot.com",
    messagingSenderId: "38755254494",
    appId: "1:38755254494:web:05c1842b282a868b0d024f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

//Se define una clase ManageAccount que contiene mÃ©todos para manejar la cuenta de usuario, incluyendo el registro, la autenticaciÃ³n y el cierre de sesiÃ³n.
export class ManageAccount {

    // MÃ©todos para registrar, autenticar y cerrar sesiÃ³n en la cuenta de usuario

    // MÃ©todo para registrar un nuevo usuario con correo electronico y contraseÃ±a

    register(email, password) {
        //Este mÃ©todo toma un correo electronico y una contraseña como argumentos y 
        //utiliza la funcion createUserWithEmailAndPassword para registrar un nuevo usuario en Firebase Authentication.
      createUserWithEmailAndPassword(auth, email, password)
        .then((_) => {
          window.location.href = "logIn.html";
          // Mostrar alerta de registro exitoso
          alert("Registro exitoso. Serass redirigido a la pagina de inicio de sesion.");
        })
        .catch((error) => {
          console.error(error.message);
              // Mostrar alerta de error de registro
              alert("Error al registrar: " + error.message);
        });
    }
    // Metodo para autenticar a un usuario existente con correo electronico y contraseña

    authenticate(email, password) {

      signInWithEmailAndPassword(auth, email, password)
      //Este metodo toma un correo electronico y una contraseÃ±a como argumentos y utiliza la funcion signInWithEmailAndPassword para autenticar al usuario en Firebase Authentication.
        .then((_) => {
          window.location.href = "./inde.html";
          // Mostrar alerta de inicio de sesion exitoso
          alert("Has iniciado sesion correctamente. Seras redirigido a la pagina principal.");
        })
        .catch((error) => {
          console.error(error.message);
                  // Mostrar alerta de error de inicio de sesiÃ³n
                  alert("Error al iniciar sesion: " + error.message);
        });
    }
    // MÃ©todo para cerrar sesion de un usuario autenticado
    signOut() {
        //Este metodo utiliza la funcion signOut para cerrar sesion de un usuario autenticado en Firebase Authentication.
      signOut(auth)
        .then((_) => {
          window.location.href =  window.location.origin + "/index.html";
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
     // Metodo para resetear la contraseña del  usuario 
    resetpassword() {
    
      sendPasswordResetEmail(auth,email)
        .then((_) => {
       alert("Se a ha enviado un correo electronico para restablecer tu contraseña")
        })
        .catch((error) => {
          console.error(error.message);
        });
      
      }
  }

  

