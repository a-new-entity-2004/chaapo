const searchMe = () => {
  const elem = document.getElementById("search-please").value.toUpperCase();
  const pro = Array.from(document.querySelectorAll(".p-details"));
  for (let i = 0; i < pro.length;i++) {
      let text = pro[i].getElementsByTagName("p")[1].innerHTML;
      if (text.toUpperCase().indexOf(elem) > -1) {
          pro[i].style.display = "";
      } else {
          pro[i].style.display = "none";
      }
  }
}

const defaultRatingIndex = 0;
let currentRatingIndex = 0;

const Ratings = [
  { emoji: "✨", name: "Rating" },
  { emoji: "😔", name: "Very Bad" },
  { emoji: "🙁", name: "Bad" },
  { emoji: "🙂", name: "Good" },
  { emoji: "🤩", name: "Very Good" },
  { emoji: "🥰", name: "Excellent" }
];

let cards = document.querySelectorAll(".cards");
cards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.classList.add("active");
    const stars = card.querySelectorAll(".star");
  const emojiEl = card.querySelector(".emoji");
  const statusEl = card.querySelector(".status");

const checkSelectedStar = (star) => {
  if (parseInt(star.getAttribute("data-rate")) === currentRatingIndex) {
    return true;
  } else {
    return false;
  }
};

const setRating = (index) => {
  stars.forEach((star) => star.classList.remove("selected"));
  if (index > 0 && index <= stars.length) {
    card
      .querySelector('[data-rate="' + index + '"]')
      .classList.add("selected");
  }
  // console.log(index);
  emojiEl.innerHTML = Ratings[index].emoji;
  statusEl.innerHTML = Ratings[index].name;
};

const resetRating = () => {
  currentRatingIndex = defaultRatingIndex;
  setRating(defaultRatingIndex);
};

stars.forEach((star) => {
  star.addEventListener("click", async function () {
    if (checkSelectedStar(star)) {
      resetRating();
      return;
    }
    const index = parseInt(star.getAttribute("data-rate"));
    currentRatingIndex = index;
    setRating(index);
    console.log("this is it", card.getElementsByTagName("h4")[0].innerHTML);
    await axios.post('/menu',{
      rate: index,
      item: card.getElementsByTagName("h4")[0].innerHTML
    });
    await axios.get("/data").then(function(res) {
      let arr = res;
      let final;
      console.log(arr)
      for (let i = 0; i < arr.length;i++) {
        console.log(arr[i][1].name)
        console.log(card.getElementsByTagName("h4")[0].innerHTML)
        if (arr[i][1].name == card.getElementsByTagName("h4")[0].innerHTML) {
          final = arr[i];
        } else {
          break;
        }
      }
      console.log(final)
      let totalrate = final[2].totalRating;
      let totalnum = final[3].totalNumber;
      let average = totalrate/totalnum;
      document.getElementById("rate").innerHTML = average;
    })
    let arr = await dish_infos.find( {name: card.getElementsByTagName("h4")[0].innerHTML} )
    let data = (arr[2].totalRating)/(arr[3].totalNumber);
    document.getElementById("rate").innerHTML = data;
  });

  star.addEventListener("mouseover", function () {
    const index = parseInt(star.getAttribute("data-rate"));
    setRating(index);
  });

  star.addEventListener("mouseout", function () {
    setRating(currentRatingIndex);
  });
});

  })
  card.addEventListener("mouseout", () => {
    card.classList.remove("active");
  })
})