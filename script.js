// Write your JavaScript code here!
window.addEventListener("load", function(){
   fetch( "https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
      const missionTarget = document.getElementById("missionTarget");
      missionTarget.innerHTML = `<h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[2].name}</li>
         <li>Diameter: ${json[2].diameter}</li>
         <li>Star: ${json[2].star}</li>
         <li>Distance from Earth: ${json[2].distance}</li>
         <li>Number of Moons: ${json[2].moons}</li>
      </ol>
      <img src="${json[2].image}">`;
      });     
   });
 let form = document.querySelector("form");
 form.addEventListener("submit",function(event){
   event.preventDefault();
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");
   let letters = /^[A-Za-z]+$/;
   if(pilotNameInput.value === "" || copilotNameInput.value === "" ||
   fuelLevelInput.value === "" || cargoMassInput.value === "") {
      alert("All fields are required!"); 
   }
   else if(!pilotNameInput.value.match(letters) || !copilotNameInput.value.match(letters) ||
      isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
      alert("Make sure to enter valid information for each field");
   }
   else {
      pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
      copilotStatus = document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `Pilot ${copilotNameInput.value} is ready for launch`;
      if(fuelLevelInput.value < 10000 || cargoMassInput.value > 10000) {
         faultyItems.style.visibility = 'visible';
         if(fuelLevelInput.value < 10000) {
           fuelStatus = document.getElementById("fuelStatus");
           fuelStatus.innerHTML = "Fuel level too low for launch"
         }
         if(cargoMassInput.value > 10000) {
            cargoStatus = document.getElementById("cargoStatus");
            cargoStatus.innerHTML = "Cargo mass too high for launch"
         }
         launchStatus = document.getElementById("launchStatus");
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red"
      }
      else {
         faultyItems.style.visibility = 'hidden';
         launchStatus = document.getElementById("launchStatus");
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green"
      }
   } 
   }); 
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

