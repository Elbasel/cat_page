const apiKey = "gGbt3dIUeto0SKLMQNRBKpVeQAtNXpw2";

async function getNewImageUrl() {
  const result = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=cats`
  );
  const json = await result.json();
  console.log(json);
  return json.data.images.original.url;
}

async function refreshImg() {
  const imgElement = document.querySelector("img");
  imgElement.src = "./loading.gif";
  const src = await getNewImageUrl();
  imgElement.src = src;
}

refreshImg();

const refreshImageButton = document.querySelector("button");
const meowSound = document.querySelector("audio");

refreshImageButton.addEventListener("click", () => {
  refreshImageButton.blur();
  refreshImg();
  meowSound.pause();
  meowSound.currentTime = 0;
  meowSound.play();
});
