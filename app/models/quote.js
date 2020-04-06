export default class Quote {
  constructor(data) {
    console.log('[RAW QUOTE API DATA]', data)
    this.body = data.quote.body
    this.author = data.quote.author
  }
}