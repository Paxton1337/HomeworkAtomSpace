let openWindow = window.open("https://google.com");
const closeWindow = () => {
    openWindow.close();
}
setTimeout(closeWindow,5000);