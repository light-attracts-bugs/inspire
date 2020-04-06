import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function drawImage() {
  console.log("draw image")
  console.log(store.State.bgimage.url)
  // let imageElem = document.getElementById("sunset")
  document.body.style.backgroundImage = "url('"+store.State.bgimage.url+"')"
  // document.body.style.backgroundImage = "url('"store.State.bgimage"')"
}


export default class ImageController {
  constructor(){
    store.subscribe("bgimage", drawImage)
    ImageService.getImage()
  }
}
