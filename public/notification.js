console.log("Service worker loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("push reveived");
  console.log(data);
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "http://image.ibb.co/frYOFd/tmlogo.png"
  });
});
