const form = document.getElementById("form");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const payload = new FormData(form);
  const data = {
    branch_id: 6149,
    phone: payload.get("phone"),
    name: payload.get("username"),
    comment: "",
  };

  // Validation
  if (!data.name || !data.phone) {
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
    return;
  }

  // Axios request inside the event listener
  axios
    .post("https://api.modme.uz/v1/create_lead", data)
    .then((response) => {
      // If success
      form.style.display = "none";
      successMessage.style.display = "block";
      errorMessage.style.display = "none";
    })
    .catch((error) => {
      // If error
      errorMessage.style.display = "block";
      successMessage.style.display = "none";
    });
});
