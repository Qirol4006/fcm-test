importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyB90EHd0x7VfsFSVktSzvCJhLKCsyJdC5E",
  authDomain: "myuzbekistan-34339.firebaseapp.com",
  projectId: "myuzbekistan-34339",
  messagingSenderId: "598826341312",
  appId: "1:598826341312:web:5aabe88821049183b7ee25"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message:', payload);

  const notificationTitle = payload.notification.title || 'Background Message';
  const notificationOptions = {
    body: payload.notification.body || 'You have a new message',
    icon: payload.notification.icon || '/icon-192x192.png',
    badge: '/badge-72x72.png',
    tag: 'fcm-notification',
    data: payload.data
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
