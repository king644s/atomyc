import { insightsData } from "../data/data.js";

var screenWidth = window.innerWidth;

// Map the data to HTML elements
const dataContainer = document.getElementById("insights-data-row");

insightsData.forEach((item) => {
  const itemBgDdiv = document.createElement("div");
  itemBgDdiv.classList.add("insights-data-box-bg");
  itemBgDdiv.style.backgroundImage = `url(${item.thumbnail})`;

  const itemDiv = document.createElement("div");
  itemDiv.classList.add("insights-data-box");
  itemDiv.innerHTML = `
  <a href="${item.page}" class="text-decoration-none">
  <h2 class="insight-data-title">${item.title}</h2>
  <p class="insight-data-description">${item.description}</p>
  </a>
  `;
  // <a href="${item.page}" class="insight-read-more">Read More</a>`;
  // itemDiv.appendChild(itemBgDdiv);

  const itemParent = document.createElement("div");
  itemParent.classList.add("col-12", "col-md-6", "col-xl-4");
  itemParent.appendChild(itemDiv);

  dataContainer.appendChild(itemParent);
});

if (screenWidth > 1099) {
  var cursor = document.querySelectorAll(".insights-data-box-bg");

  cursor.forEach((item) => {
    document.addEventListener("mousemove", function (e) {
      // var x = e.clientX;
      // var y = e.clientY;
      // console.log(x,y,"xy")
      // item.style.transform = `translate3d(calc(${e.clientX}px - 100%), calc(${e.clientY}px - 150%), 0)`;
      var rect = item.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      // item.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      item.style.transform = `translate3d(calc(${x}px - 100%), calc(${y}px - 100%), 0)`;
    });
  });
}
