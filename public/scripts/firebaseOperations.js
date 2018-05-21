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
                    return messaging.getToken();
                })
                .then(function(currentToken) {
                    console.log("Current FCM Device Token : ", currentToken);
                })
                .catch(function(err) {
                    console.log("Unable to show notifications : ", err);
            });

            messaging.onMessage(function(payload) {
                console.log('Payload Message', payload);
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