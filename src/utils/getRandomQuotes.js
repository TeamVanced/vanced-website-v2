const quotesArray = [
	"Read the instructions",
	"Super duper advanced",
	"Blocking ads is better than blocking me",
	"Advanced but without the ads",
	"Just read the instructions!",
	"Download Brave to support us",
	"Download Adguard to support us",
	"Vanced doesn't include video downloading",
];

const getRandomQuotes = () => {
	const randomNumber = Math.floor(Math.random() * quotesArray.length);

	return quotesArray[randomNumber];
};

export default getRandomQuotes;
