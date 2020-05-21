(function() {
  window.a = {}

   function sendEmailLoginLink() {
    a_send_link_btn.disabled = true
    const  email = a_email.value
    alert(email)
  var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url       : location.href ,
              handleCodeInApp : true
  }
    
    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
    .then(function() {

    a_msg.innerText = "Email has been sent to login in "
    localStorage.setItem("email", email);
       })

       .catch(function(error) {
         console.log(error)

       })
      }

        function loginPageLoad() {
          let email = localStorage.getItem("email")
        if(!email)
        {
          email = prompt('PLease proivide your email for confirmation')
        }
        firebase.auth().signInWithEmailLink(email, location.href)
        .then(function(result){
          localStorage.removeItem("email")
          //const user = result.user
        })

        .catch(function(error){
          console.log(error)
          
        })
    }
         
      


       function Logout () {
         
         a_logout_btn.disabled = true
         firebase.auth().signOut().catch(function(error)
         {
         console.log(error)
        })
       }
        

      function authStateChanged(user)
      {
          if(user === null)
          {
              a_msg.innerHTML = "logged out"
              a_logging_in.style.display = "block"
              a_logged_in.style.display = "none"
              a_send_link_btn.disable = false
              if (a.logout) a.logout();
          } else {
              a_msg.innerHTML = "logged in"
              a_logging_in.style.display = "none"
              a_logged_in.style.display = "block"
              a_logout_btn.disable = false
              if(a.login) a.login();
          }
      }

      


      document.addEventListener('DOMContentLoaded', () => {
        a_msg.innerHTML = "loaded"
        a_send_link_btn.addEventListener('click', sendEmailLoginLink)
        a_logout_btn.addEventListener('click', Logout)
        const auth = firebase.auth()
        auth.onAuthStateChanged(authStateChanged)
        if (auth.isSignInWithEmailLink(location.href))
        {
            loginPageLoad()
        }

        })
    })();