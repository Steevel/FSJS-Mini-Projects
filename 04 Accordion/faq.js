const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];
let faqDisplayed = false;

window.onload = () => {
  createFaq();
}

function showFaq(ele) {
  let faq = ele.parentNode.parentNode;
  console.log(faq)
  let ans = faq.lastChild;
  if (!faqDisplayed) {
    ans.className = ""
    faqDisplayed = true;
    btnStatusUpdate(true, ele.parentNode);
  } else {
    ans.className = "hidden"
    faqDisplayed = false;
    btnStatusUpdate(false, ele.parentNode);
  }
}

function createFaq() {
  for (let i = 0; i < faqData.length; i++) {
    accordianBody.innerHTML += `<div id=\"${faqData[i].id}\" class=\"faq\"><div class=\"faq_header\"> <h3>${faqData[i].question}</h3><button class=\"show_btn\" onclick="showFaq(this)">+</button></div><p class=\"hidden\">${faqData[i].answer}</p></div>`
  }
}

function btnStatusUpdate(status, element) {
  if (status) {
    element.children[1].innerText = "-"
  } else {
    element.children[1].innerText = "+";
  }
}


