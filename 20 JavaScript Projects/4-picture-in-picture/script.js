const video = document.querySelector("#video");
const button = document.querySelector("#button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (error) {
    // Catch Error Here
    console.log("whoops, error here: ", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disbled = true;
  // Start Picture in Picture
  await video.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();
