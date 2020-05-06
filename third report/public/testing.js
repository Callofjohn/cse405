console.log("(1) testing.js is running fine");

(function login() {
    function login() {
         const email = a_email.value
         a_msg.innerText = "welcome john"
         a_logging_in.style.display = "none"
         a_logged_in.style.display = "block"
         //alert(email)
       }

       function Logout () {
         a_msg.innerText = "logged out"
         a_logging_in.style.display = "block"
         a_logged_in.style.display = "none"
       }
      document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("a_msg").innerHTML = "Signed in"
        a_logging_in.style.display = "block"
        a_send_link_btn.addEventListener('click', login);
        a_logout_btn.addEventListener('click', Logout);
       
       
        // firebase.auth().onAuthStateChanged(user => { });
          //const app = firebase.app();
        })
    })();