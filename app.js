// for horizontal scroll by arrow btns

//Selectors
const container = document.querySelector(".testimonial-card-container");
const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".forward-btn");
const nextBtn = document.querySelector(".backward-btn");

//Variables
const gap = 16;
const cardWidth = cards[0].offsetWidth + gap;
let activeIndex = 1;

// initial state
cards[activeIndex].classList.add("active");

//handlers
const handleClickLeftArrow = () => {
  if (activeIndex > 0) {
    activeIndex--;
  }

  cards.forEach((c) => c.classList.remove("active"));
  cards[activeIndex].classList.add("active");

  container.scrollTo({
    left: cardWidth * activeIndex,
    behavior: "smooth",
  });
};

const handleClickRightArrow = () => {
  if (activeIndex < cards.length - 1) {
    activeIndex++;
  }

  cards.forEach((c) => c.classList.remove("active"));
  cards[activeIndex].classList.add("active");

  container.scrollTo({
    left: cardWidth * activeIndex,
    behavior: "smooth",
  });
};

//listeners
prevBtn.addEventListener("click", handleClickLeftArrow);
nextBtn.addEventListener("click", handleClickRightArrow);

//for email form input
//Selectors
const emailForms = document.querySelectorAll(".email-form");

//variables
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//handlers
const handleClickJoin = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const email = formData.get("email");

  const result = emailPattern.test(email);
  if (!result) {
    alert("Please enter a valid email");
    return;
  }

  alert("You joined The Creator successfully");
  e.target.reset();
};

//listener
emailForms.forEach((form) => {
  form.addEventListener("submit", handleClickJoin);
})

