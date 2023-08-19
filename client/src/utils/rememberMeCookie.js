export function createLogCookie(userLog) {
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie =
      name +
      "=" +
      encodeURIComponent(JSON.stringify(value)) +
      ";expires=" +
      expires.toUTCString() +
      ";path=/";
  }
  setCookie("remember_me", userLog, 30);
  console.log("cookie set");
}
