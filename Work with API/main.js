(async () => {
  const title = await fetch("https://api.spacexdata.com/v3/launches", {
    method: "GET",
  });

  let titleJson = await title.json();
  console.log(titleJson);
  for (let i = 0; i < titleJson.length; i++) {
    if (titleJson[i].links.flickr_images == 0) {
      delete titleJson[i];
    }
  }

  const mainContainerEl = document.querySelector(".main-container");
  titleJson.forEach((props) => {
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "mainDiv");

    const launchData = document.createElement("span");
    launchData.innerHTML = `Launch Data: ${props.launch_date_local} `;
    mainDiv.append(launchData);

    const missionName = document.createElement("span");
    missionName.innerHTML = `Mission name: ${props.mission_name} `;
    mainDiv.append(missionName);

    const flightNumber = document.createElement("span");
    flightNumber.innerHTML = `Flight number: ${props.flight_number}`;
    mainDiv.append(flightNumber);

    const img = document.createElement("div");
    img.innerHTML = `<img width="100px" height="100px"  src="${props.links.flickr_images}"/>`;
    mainDiv.append(img);

    mainContainerEl.append(mainDiv);
  });
})();
