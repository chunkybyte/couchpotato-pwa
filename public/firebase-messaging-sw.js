importScripts('https://www.gstatic.com/firebasejs/5.0.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.0.3/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyCWepscZaKExwVZtvGXEFxsqqH-ZEBZMQo",
    authDomain: "couch-potato-349f2.firebaseapp.com",
    databaseURL: "https://couch-potato-349f2.firebaseio.com",
    projectId: "couch-potato-349f2",
    storageBucket: "couch-potato-349f2.appspot.com",
    messagingSenderId: "731370771356"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();