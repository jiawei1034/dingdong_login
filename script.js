const auth = firebase.auth();
const register = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    
    if (email.trim() == "") {
        alert("Enter Email");
    } else if (password.trim().length < 7) {
        alert("Password must be at least 7 characters");
    } else {
        auth
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            // ...
        });
    }
    };

    document.querySelector("#register").addEventListener("click", () => {
        register();
        });
        
        //register when you hit the enter key
        document
        .querySelector("#registration-password")
        .addEventListener("keyup", (e) => {
            if (event.keyCode === 13) {
            e.preventDefault();
        
            register();
            }
        });

        //login
        const login = () => {
            const email = document.querySelector("#loginmail").value;
            const password = document.querySelector("#loginpass").value;
            
            if (email.trim() == "") {
                alert("Enter Email");
            } else if (password.trim() == "") {
                alert("Enter Password");
            } else {
                authenticate(email, password);
            }
            };
            
            document.querySelector("#login").addEventListener("click", () => {
            login();
            });
            
            //sign in when you hit enter
            document
            .querySelector("#login-password")
            .addEventListener("keyup", (e) => {
                if (event.keyCode === 13) {
                e.preventDefault();
            
                login();
                }
            });