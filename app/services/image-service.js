import store from "../store.js";
import BgImage from "../models/bg-image.js"

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getImage(){
    console.log("calling getImage")
    let res = await imgApi.get()
    store.commit("bgimage", new BgImage(res.data))
  }
}

const imageService = new ImageService();
export default imageService;
