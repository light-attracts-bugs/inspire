export default class BgImage {
  constructor(data){
    console.log('[RAW IMAGE API DATA]', data)

    this.url = data.large_url
  }
}