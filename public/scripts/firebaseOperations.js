var FirebaseOperations = (function() {
    return {
        messagingFunctions: function() {
            // Retrieve Firebase Messaging Object 
            const messaging = firebase.messaging();

            // Using the console Public VAPID Key
            messaging.usePublicVapidKey("BPXOQqDTHE0s3T2GGQH7tNvGFKWg5rGNZi7tmsPqlHpZ7pb4RKg-eQVjiVfAPGR8p0zRIaodX1J_1Zq4eGkOEfA");
            
            // Request Push Notification Display Permissions
            messaging.requestPermission()
                .then(function() {
                    console.log("Notification Permission Granted!");

                }).catch(function(err) {
                    console.log("Unable to show notifications : ", err);
            });

            console.log("Step 2 : Permission Check Complete. Token Things Now.");            
            
            messaging.getToken().then(function(currentToken) {
                if (currentToken) {
                    
                    console.log("Current Token : ", currentToken);

                    sendTokenToServer(currentToken);
                    updateUIForPushEnabled(currentToken);
                } else {
                    console.log("Need Permission to show Notifications");
                    updateUIForPushPermissionRequired();
                    setTokenSentToServer(false);
                }
            }).catch(function(err) {
                console.log("Unable to Retrieve the Token : ", err);
                showToken("Error retrieving Instance ID token : ", err);
                setTokenSentToServer(false);
            }).then(function() {
                console.log("Step 3 : Token Thing Done!");
            });

        },

        init: function() {
            var config = {
                apiKey: "AIzaSyCWepscZaKExwVZtvGXEFxsqqH-ZEBZMQo",
                authDomain: "couch-potato-349f2.firebaseapp.com",
                databaseURL: "https://couch-potato-349f2.firebaseio.com",
                projectId: "couch-potato-349f2",
                storageBucket: "couch-potato-349f2.appspot.com",
                messagingSenderId: "731370771356"
            };
            firebase.initializeApp(config);

            this.messagingFunctions();
        }
    }
})();