(async () => {
  const title = await fetch("https://api.spacexdata.com/v3/launches", {
    method: "GET",
  });

  let titleJson = await title.json();
  console.log(titleJson);
  // for (let j = 0; j < (titleJson.length / 10); j++) {
  //   delete titleJson[j];
  // }
  for (let j = 0; j < titleJson.length; j++) {
    if (titleJson[j].links.flickr_images == 0) {
      delete titleJson[j];
    }
  }
  // for (let j = 0; j < titleJson.length; j++) {
  //   if (titleJson[j].links.flickr_images == 1) {
  //     delete titleJson[j];
  //   }
  // }
  for (let i = 0; i < titleJson.length - 30; i++) {
    delete titleJson[i];
  }
  console.log(titleJson);

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

    const divForImg = document.createElement("div");
    divForImg.setAttribute("class", "divForImg");

    const img = document.createElement("img");
    img.setAttribute("src", props.links.flickr_images[0]);
    img.setAttribute("class", "launch-img");
    divForImg.append(img);

    if (props.links.flickr_images.length > 1) {
      const img2 = document.createElement("img");
      img2.setAttribute("src", props.links.flickr_images[1]);
      img2.setAttribute("class", "launch-img-2");
      divForImg.append(img2);
    }
    mainDiv.append(divForImg);
    mainContainerEl.append(mainDiv);
  });
})();
