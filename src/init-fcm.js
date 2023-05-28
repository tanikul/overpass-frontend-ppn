import firebase from "firebase/app";
import "firebase/messaging";

let messaging = null
if (firebase.messaging.isSupported()) {
    const initializedFirebaseApp = firebase.initializeApp({
        // Project Settings => Add Firebase to your web app
        
        apiKey: "AIzaSyC7ckUlY9z9Tyghf-IrVYfNoe4WHGMgC24",
        authDomain: "overpass-ppn.firebaseapp.com",
        projectId: "overpass-ppn",
        storageBucket: "overpass-ppn.appspot.com",
        messagingSenderId: "292589233956",
        appId: "1:292589233956:web:10b7a76a5c3869dda5b5b1",
        measurementId: "G-68C44T0109"
   });
   messaging = initializedFirebaseApp.messaging();
}


const subscribeTokenToTopic = (token, topic) => {
    const fcm_server_key = "AAAARB-tZyQ:APA91bH2eY1volAL1KCojzemJJoErkzLllrPpCGzi-rD46DVt4EQL1Aw6nKxxBwll2V-gnuKtBb0NgTlKtFO6aR_EuEo2RuPIFzd5KJ2QIiMQZZLa4lw2h4Zm0_XR4qsmKPD2BpYHAHu";
    fetch('https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/'+topic, {
      method: 'POST',
      headers: new Headers({
        'Authorization': 'key='+fcm_server_key
      })
    }).then(response => {
      if (response.status < 200 || response.status >= 400) {
        throw 'Error subscribing to topic: '+response.status + ' - ' + response.text();
      }
      console.log('Subscribed to "'+topic+'"');
    }).catch(error => {
      console.error(error);
    })
  }
export { messaging, subscribeTokenToTopic };
