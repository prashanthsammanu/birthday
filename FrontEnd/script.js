function fetchRandomNumber() {
  fetch("http://localhost:3000/randomNum")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("random-number").textContent =
        data.ranAge + " YEARS OLD";
    })
    .catch((error) => console.log(error));
}
