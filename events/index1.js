// Array containing details of upcoming events

const data = [

  {
    id: 0,
    pic: "../assets/images/node-js_img.png",
    time: "20 February 2021, 6:00pm",
    title: "Step into the World of NodeJS",

    link:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-step-into-the-world-of-nodejs-dsc-banasthali-vidyapith/#/",
  },
  {
    id: 1,
    pic: "../assets/images/ML_img.jpg",
    time: "21 February 2021, 6:00pm",
    title: "Insights into Machine Learning ",

    link:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-insights-into-machine-learning-dsc-banasthali-vidyapith/#/",
  },
  {
    id: 2,
    pic: "../assets/images/api_img.jfif",
    time: "23 February 2021, 6:00pm",
    title: "Demystifying Google Maps API",

    link:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-demystifying-google-maps-api-dsc-banasthali-vidyapith/#/",
  },

];

// If there are no upcoming events set data = 0

// const data = 0;

if (data == 0) {
  var body = document.querySelector(".outer-div");
  var h4 = document.createElement("h4");
  var p = document.createElement("p");
  body.append(h4);
  body.append(p);
  h4.setAttribute("class", "card-title");
  h4.innerHTML = "There are no upcoming events at the moment.";
} else {
  const buildCard = (event) => {
    // Create elements needed to build a card
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const banner = document.createElement("h3");
    const a = document.createElement("a");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const time = document.createElement("time");

    // Append newly created elements into the DOM
    const body = document.querySelector(".outer-div");
    body.append(div);
    div.append(img);
    div.append(banner);
    div.append(h3);
    div.append(time);

    div.append(a);

    // Set content and attributes
    div.setAttribute("class", "card");
    banner.innerHTML = "Upcoming";
    banner.setAttribute("class", "badge");
    banner.style.backgroundColor = "#4285F4";
    img.setAttribute("src", event.pic);
    img.style.marginTop = "4%";
    img.setAttribute("class", "card-img-top");

    time.setAttribute("class", "time");
    time.innerHTML = event.time;

    h3.setAttribute("class", "card-title");
    h3.innerHTML = event.title;

    p.setAttribute("class", "card-text");

    a.setAttribute("class", "event-link");
    a.innerHTML = "Read More";
    a.setAttribute("href", event.link);
  };

  data.forEach((event) => buildCard(event));
}
