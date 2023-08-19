export function getCookie() {
  const cookieValue = document.cookie.match(
    "(^|;)\\s*" + "remember_me" + "\\s*=\\s*([^;]+)"
  );
  if (cookieValue) {
    const cookie = decodeURIComponent(cookieValue.pop());
    return JSON.parse(cookie);
  }
  return null;
}
