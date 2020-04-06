import QuoteService from "../services/quote-service.js";
import store from "../store.js"

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

function drawQuote(){
  console.log("THE QUOTE MAN SAYS:", store.State.quote)
  let quoteElem = document.getElementById("quote")
  quoteElem.innerText = "Quote: " + store.State.quote.body + "\nAuthor: " + store.State.quote.author
}
export default class QuoteController {
  constructor(){
    store.subscribe("quote", drawQuote)
    QuoteService.getQuote()
  }
}
