let focused;

      function rating() {
        focused = document.activeElement.id;
        console.log(focused);
      }
      function submitted() {
        let container = document.getElementById("container");
        let thankYou = document.getElementById("thank-you");
        let selectionTxt = document.getElementById("selection-text");

        if (focused !== undefined) {
          container.style.visibility = "hidden";
          container.style.display = "none";
          thankYou.style.visibility = "visible";
          thankYou.style.display = "flex";
          selectionTxt.innerHTML = "You selected " + focused + " out of 5";
        }
      }