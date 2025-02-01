const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=10&cat=movies';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '9958c92e3fmsh232ed284cbab050p16273bjsn37875020a191',
		'x-rapidapi-host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: {}
};
let quote =  document.getElementById("quote");
let author = document.getElementById("author")
async function  fetchData() {
    try {
        const response = await fetch(url, options);
        var result = await response.json();
        console.log(result);

        quote.innerHTML = result[0].quote;
        author.innerHTML = result[0].author;

        
    } catch (error) {
        console.error(error);
    }
}
function tweet() {
    window.open("https://x.com/compose/post?text=" + quote.innerHTML + " ---by" + author.innerHTML, "x window", "width=600 , height=300");
}


