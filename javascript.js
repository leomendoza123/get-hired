var config = {
  apiKey: "AIzaSyAsyFlYCpkm8U3fH33kJnFu289VhoRBV2w",
  authDomain: "get-hired-516c2.firebaseapp.com",
  databaseURL: "https://get-hired-516c2.firebaseio.com",
  projectId: "get-hired-516c2",
  storageBucket: "get-hired-516c2.appspot.com",
  messagingSenderId: "863848021647"
};
firebase.initializeApp(config);

var provider = new firebase.auth.GithubAuthProvider();
provider.addScope("repo");

provider.setCustomParameters({
  allow_signup: "false"
});

firebase
  .auth()
  .getRedirectResult()
  .then(function(result) {
    console.log("AUTH RESULT", result);

    if (result.credential) {
        
      var token = result.credential.accessToken;
      console.log ("TOKEN ", token)
      // ...
    }
    var user = result.user;
  })
  .catch(function(error) {
    console.log("AUTH RESULT error ", error);
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;

    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function(idToken) {
        console.log("UID", uid);
        console.log("ID TOKEN", idToken);
        // Send token to your backend via HTTPS
        // ...
      })
      .catch(function(error) {
        console.log(error);
        // Handle error
      });
  } else {
    console.log("NO USER");

    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(function(result) {
        console.log(result);
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function(error) {
        console.log(error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

    // ...
  }
});
