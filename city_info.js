var currentPage = window.location.href;

alert(currentPage);

const params = currentPage.split("?")[1]
const value = params.split("=")[1];

alert(value);

