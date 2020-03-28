import { Post } from "./config";
const publicVapidKey =
  "BFqjre-1gkB_XlceOyYa2zO-7X-YoWvPPVlPtK_l-D_UlJQpF1meF1ncONgjmFTQU3zfdpw8zGjVtD0LBn5q_uA";

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export async function send() {
  // Register Service Worker
  console.log("Registering service worker...");
  const register = await navigator.serviceWorker.register("/notification.js", {
    scope: "/"
  });
  console.log("Service Worker Registered...");

  // Register Push
  console.log("Registering Push...");
  const subscription = await register.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    })
    .catch(err => console.log(err));
  console.log("Push Registered...");

  // Send Push Notification
  console.log("Sending Push token...");
  Post("auth/subscribe", subscription);
  console.log("Token Sent...");
}

export async function askUserPermission() {
  return await Notification.requestPermission();
}
