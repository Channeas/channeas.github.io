    /* Lägg till så att om man trycker på skärmen utanför menyn när menyn är uppe stängs menyn */
	/* Initialize Firebase */
	  var config = {
    	apiKey: "AIzaSyDUPVrFCy1s530DFuXw5SNZyvrxxwOzKRM",
    	authDomain: "hello-world-databas.firebaseapp.com",
	    databaseURL: "https://hello-world-databas.firebaseio.com",
    	projectId: "hello-world-databas",
	    storageBucket: "hello-world-databas.appspot.com",
    	messagingSenderId: "324171770997"
  	};
  	firebase.initializeApp(config);

  	var search = false;
  	var smenu = false

//////// Nav in and out
  	var navOut = false;
  	console.log(navOut);
  	
    function openNav() { // Knappen för att öppna menyn
        $("#mysidenav").toggleClass("sidenav-width");
        navOut = !navOut;
    }

    