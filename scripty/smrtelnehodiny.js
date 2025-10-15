console.log("tik tak ubiha ti cas tak na co tu cucis");

let intervalId;
    const defaultExpectancy = 79;

    function zacitOdpocet() {
      clearInterval(intervalId);
      const birthdate = new Date(document.getElementById('datum_narozeni').value);
      if (isNaN(birthdate) || birthdate == "Invalid Date") {
        document.getElementById('odpocet').textContent = "spatnej datum";
        return;
      }
      const deathDate = new Date(birthdate);
      deathDate.setFullYear(deathDate.getFullYear() + defaultExpectancy);

      function updateCountdown() {
        const now = new Date();
        let diff = deathDate - now;
        if (diff < 0) diff = 0;
        const seconds = Math.floor(diff / 1000);
        document.getElementById('odpocet').textContent = `${seconds.toLocaleString()} vterin ti zbyva`;
        // Play tick sound
        const tick = document.getElementById('tick');
        tick.currentTime = 0;
        tick.play();
      }
      updateCountdown();
      intervalId = setInterval(updateCountdown, 1000);

      document.getElementById("smazat").style.display = "none";
      document.getElementById("smazat2").style.display = "none";
      document.getElementById("smazat3").style.display = "none";
      document.getElementById("smazat4").style.display = "none";
      document.getElementById("smazat5").style.display = "none";
      document.getElementById("smazat6").style.display = "none";
    }