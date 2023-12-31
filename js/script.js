src =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js";
      integrity =
        "sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm";
      crossorigin = "anonymous"(
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (() => {
          "use strict";

          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          const forms = document.querySelectorAll(".needs-validation");

          // Loop over them and prevent submission
          Array.from(forms).forEach((form) => {
            form.addEventListener(
              "submit",
              (event) => {
                if (!form.checkValidity()) {
                  event.preventDefault();
                  event.stopPropagation();
                }

                form.classList.add("was-validated");
              },
              false
            );
          });
        })()
      );