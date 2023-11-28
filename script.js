const memeData = [
  {
    emotionTag: ["confused", "bollywood", "suspense"],
    image: "confused.jpg",
    alt: "random bollywood meme",
  },

  {
    emotionTag: ["confused", "pain"],
    image: "confused2.jpg",
    alt: "both man and women in confusion",
  },

  {
    emotionTag: ["pain", "bollywood"],
    image: "pain.jpg",
    alt: "munna vai mbbs",
  },

  {
    emotionTag: ["pain", "jelousy", "bollywood", "sad"],
    image: "pain2.jpg",
    alt: "Sarukh Khan meme",
  },

  {
    emotionTag: ["pain"],
    image: "pain5.jpg",
    alt: "hurtful meme",
  },

  {
    emotionTag: ["revenge", "bollywood", "angry"],
    image: "revenge.jpg",
    alt: "Angry old man",
  },

  {
    emotionTag: ["sad", "crying", "bollywood"],
    image: "sad.jpeg",
    alt: "A person not wanting to cry",
  },

  {
    emotionTag: ["crying", "sad", "homesick"],
    image: "sad2.jpg",
    alt: "Allia Bhaat crying like a baby",
  },

  {
    emotionTag: ["sad", "alone"],
    image: "sad3.jpg",
    alt: "Not wanting to live on the earth",
  },

  {
    emotionTag: ["pain", "sad", "money"],
    image: "sad4.jpg",
    alt: "Women crying in the corner",
  },

  {
    emotionTag: ["pain", "funny", "humor", "sad"],
    image: "sad5.jpg",
    alt: "Some anime character meme",
  },

  {
    emotionTag: ["serious"],
    image: "serious.gif",
    alt: "Asneer Grover being serious about life",
  },

  {
    emotionTag: ["humor", "serious"],
    image: "serious2.gif",
    alt: "Serious man",
  },
  {
    emotionTag: ["funny", "humor"],
    image: "funny.jpg",
    alt: "Walter white from breaking bad",
  },
];

//Selecting DOM
const radioContainer = document.querySelector(".radio-container");
const submitBtn = document.getElementById("submit-btn");
const modalImage = document.querySelector(".modal-image");
const memeModal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

//Getting emotionArray of all the emotion from the memeData
const getEmotionArray = function (arr) {
  const finalArr = [];
  for (let meme of arr) {
    for (let emotion of meme.emotionTag) {
      if (!finalArr.includes(emotion)) {
        finalArr.push(emotion);
      }
    }
  }
  return finalArr;
};

//Rendering emotion radio in the DOM
const renderEmotionRadio = function (arr) {
  let htmlTag = "";
  const emotionArray = getEmotionArray(arr);
  for (let emotion of emotionArray) {
    htmlTag += `
             <div class="radio">
                 <label for="${emotion}">${emotion}</label>
                 <input id="${emotion}" value="${emotion}" name="emotion" type="radio"> 
             </div>
         `;
  }
  radioContainer.innerHTML = htmlTag;
};
renderEmotionRadio(memeData);

//Function to Highlight the selected element
const radioHighlight = function (e) {
  const radioElement = document.getElementsByClassName("radio");
  for (let radio of radioElement) {
    radio.classList.remove("highlighted");
  }
  document
    .getElementById(e.target.id)
    .parentElement.classList.add("highlighted");
};

//Applying highlighting if any change is detected in the
radioContainer.addEventListener("change", radioHighlight);

function matchingArray() {
  if (document.querySelector("input[type='radio']:checked")) {
    const selectedRadio = document.querySelector(
      "input[type='radio']:checked"
    ).value;
    const matchingMemeArray = memeData.filter(function (meme) {
      return meme.emotionTag.includes(selectedRadio);
    });
    return matchingMemeArray;
  }
}

function getSingleObject() {
  const matchingEmotionObject = matchingArray();
  if (matchingEmotionObject.length === 1) {
    return matchingEmotionObject[0];
  } else {
    const randNum = Math.floor(Math.random() * matchingEmotionObject.length);
    return matchingEmotionObject[randNum];
  }
}

function renderImage() {
  const object = getSingleObject();
  memeModal.classList.remove("hidden");
  modalImage.innerHTML = `
     <img src="images/${object.image}" alt="${object.alt}">
   `;
}

function closeModal() {
  memeModal.classList.add("hidden");
  document.querySelector(".overlay").style.display = "none";
}

submitBtn.addEventListener("click", function () {
  renderImage();
  document.querySelector(".overlay").style.display = "block";
});

modalClose.addEventListener("click", closeModal);

document.querySelector(".overlay").addEventListener("click", closeModal);

function helpSection(number) {
  return number >= 18 ? "You can drink" : "You can't drink";
}
