$(document).ready(function () {
  // Common function to handle form submission and show the modal
  function handleFormSubmission(formId) {
    $(formId).on("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally
      // Open the modal
      $("#confirmationModal").modal("show");
    });
  }

  // Apply the handler to each form
  handleFormSubmission("#createUser");
  handleFormSubmission("#createRole");
  handleFormSubmission("#editRole");
  handleFormSubmission("#editUser");
});