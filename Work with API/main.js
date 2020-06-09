(async () => {
  const title = await fetch("https://ghibliapi.herokuapp.com/films", {
    method: "GET",
  });
  
  const titleJson = await title.json();
  console.log(titleJson);
  const mainContainerEl = document.querySelector("#main-container");
  const subTitle = document.createElement("div");
  subTitle.innerHTML = `Ниже представлен список аниме:`;
  mainContainerEl.append(subTitle);
  titleJson.forEach((anime) => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.innerHTML= `Director: ${anime.director} // `;
    div.append(span);
    const span2 = document.createElement("span");
    span2.innerHTML= `Title: ${anime.title} // `;
    div.append(span2);
    const span3 = document.createElement("span");
    span3.innerHTML= `Release date: ${anime.release_date} `;
    div.append(span3);
    mainContainerEl.append(div);
  });
})();
