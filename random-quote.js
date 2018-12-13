/* these variable need to be defined outside the  various functions 
so that they have global scope and can be used in multiple functions.  */

/* Only used the "top" quotes because it stopped working if there were 
too many quotes and the variables got too long */

var currentQuote = [];  //defined outside of function so that it can be used in multiple functions.

var financeQuotes = [["Buy when everyone else is selling and hold until everyone else is buying. That's not just a catchy slogan. It's the very essence of successful investing.", "J. Paul Getty"], ["Every time you borrow money, you're robbing your future self.", "Nathan W. Morris"], ["Financial peace isn't the acquisition of stuff. It's learning to live on less than you make, so you can give money back and have money to invest. You can't win until you do this.", "Dave Ramsey"], ["How many millionaires do you know who have become wealthy by investing in savings accounts? I rest my case.", "Robert G. Allen"], ["I never attempt to make money on the stock market. I buy on the assumption that they could close the market the next day and not reopen it for ten years.", "Warren Buffett"], ["I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy.", "Warren Buffett"], ["If you have trouble imagining a 20% loss in the stock market, you shouldn't be in stocks.", "John Bogle"], ["If you took our top fifteen decisions out, we'd have a pretty average record. It wasn't hyperactivity, but a hell of a lot of patience. You stuck to your principles and when opportunities came along, you pounced on them with vigor.", "Charlie Munger"], ["Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.", "Paul Samuelson"], ["It makes more sense to buy a wonderful business at a fair price than it does to buy a fair business at a wonderful price.", "Warren Buffet"], ["Rich people have small TVs and big libraries, and poor people have small libraries and big TVs.", "Zig Ziglar"], ["The individual investor should act consistently as an investor and not as a speculator.", "Ben Graham"], ["The Stock Market is designed to transfer money from the Active to the Patient.", "Warren Buffett"], ["The stock market is filled with individuals who know the price of everything, but the value of nothing.", "Phillip Fisher"], ["When buying shares, ask yourself, would you buy the whole company?.", "Rene Rivkin"], ["You must gain control over your money or the lack of it will forever control you.", "Dave Ramsey"]];

var humorousQuotes = [["If all the economists were laid end to end, they'd never reach a conclusion.", "George Bernard Shaw"], ["If at first you don't succeed, find out if the loser gets anything.", "Bill Lyon"], ["The real problem is not whether machines think but whether men do.", "B. F. Skinner"], ["The secret of life is honesty and fair dealing. If you can fake that, you've got it made.", "Groucho Marx"], ["The tooth fairy teaches children that they can sell body parts for money.", "David Richerby"], ["The trouble with being poor is that it takes up all of your time.", "Willem de Kooning"], ["The more you know, the more you realise how much you don't know - the less you know, the more you think you know.", "David T. Freeman"], ["The little I know I owe to my ignorance.", "Orville Mars"], ["The nice part about being a pessimist is that you are constantly being either proven right or pleasantly surprised.", "George F. Will"], ["The only normal people are the ones you don't know very well.", "Joe Ancis"], ["The only thing that interferes with my learning is my education.", "Albert Einstein"], ["Sometimes the road less traveled is less traveled for a reason.", "Jerry Seinfeld"], ["Just because your voice reaches halfway around the world doesn't mean you are wiser than when it reached only to the end of the bar.", "Edward R. Murrow"], ["In theory, there is no difference between theory and practice; In practice, there is.", "Chuck Reid"], ["If the lessons of history teach us anything it is that nobody learns the lessons that history teaches us.", "Anon"], ["I have such a high regard for the truth that I use it sparingly.", "Timothy Connor"], ["I like long walks, especially when they are taken by people who annoy me.", "Noel Coward"], ["Everyone is entitled to be stupid, but some abuse the privilege.", "Anonymous"], ["Experience is that marvelous thing that enables you to recognize a mistake when you make it again.", "Franklin P. Jones"], ["Good judgment comes from experience, and experience comes from bad judgment.", "Barry LePatner"], ["Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.", "Douglas Hofstadter"], ["I always wanted to be somebody, but now I realize I should have been more specific.", "Lily Tomlin"], ["Don't worry about the world coming to an end today. It's already tomorrow in Australia.", "Charles M. Schulz"], ["Education is what remains after one has forgotten what one has learned in school.", "Albert Einstein"], ["Education.. has produced a vast population able to read but unable to distinguish what is worth reading.", "G. M. Trevelyan"], ["Arithmetic is being able to count up to twenty without taking off your shoes.", "Mickey Mouse"], ["An inventor is simply a fellow who doesn't take his education too seriously.", "Charles F. Kettering"], ["An optimist stays up to see the New Year in. A pessimist waits to make sure the old one leaves.", "Bill Vaughan"], ["Always forgive your enemies; nothing annoys them so much.", "Oscar Wilde"], ["America believes in education: the average professor earns more money in a year than a professional athlete earns in a whole week.", "Evan Esar"], ["A physicist is an atom's way of knowing about atoms.", "George Wald"], ["A committee can make a decision that is dumber than any of its members.", "David Cobitz"], ["2 is not equal to 3, not even for large values of 2.", "Grabel's Law"], ["When I hear somebody sigh, 'Life is hard,' I am always tempted to ask, 'Compared to what?'.", "Sydney J. Harris"], ["When I was a boy I was told that anybody could become President. Now I'm beginning to believe it.", "Clarence Darrow"], ["When people are free to do as they please, they usually imitate each other.", "Eric Hoffer"], ["When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.", "Norm Crosby"], ["When you sit with a nice girl for two hours, you think it's only a minute. But when you sit on a hot stove for a minute, you think it's two hours. That's  relativity.", "Albert Einstein"], ["When your friends begin to flatter you on how young you look, it's a sure sign you're getting old.", "Mark Twain"], ["Those who believe in telekinetics, raise my hand.", "Kurt Vonnegut"], ["Time flies like an arrow; fruit flies like a banana.", "Groucho Marx"], ["There are 10 types of people in the world: those who understand binary, and those who don't.", "Anonymous"], ["The trouble with being punctual is that nobody's there to appreciate it.", "Franklin P. Jones"]];

var inspirationalQuotes = [["An eye for eye only ends up making the whole world blind.", "Gandhi"], ["Be yourself; everyone else is already taken.", "Oscar Wilde"], ["Believe those who are seeking the truth. Doubt those who find it.", "André Gide"], ["Better to remain silent and be thought a fool than to speak out and remove all doubt.", "Abraham Lincoln"], ["Eighty percent of success is showing up.", "Woody Allen"], ["Experience is a hard teacher because she gives the test first, the lesson afterwards.", "Vernon Sanders Law"], ["Every child is an artist.  The problem is how to remain an artist once he grows up.", "Pablo Picasso"], ["It is impossible to defeat an ignorant man in argument.", "William G. McAdoo"], ["If you're offered a seat on a rocket ship, don't ask what seat! Just get on.", "Sheryl Sandberg"], ["If your ship doesn't come in, swim out to meet it!.", "Jonathan Winters"], ["He who asks is a fool for five minutes, but he who does not ask remains a fool forever.", "Chinese Proverb"], ["How many legs does a dog have, if you call the tail a leg? Four. Calling a tail a leg doesn't make it a leg.", "Abraham Lincoln"], ["I have not failed. I've just found 10,000 ways that won't work.", "Thomas A. Edison"], ["I hear: I forget / I see: I remember / I do: I understand.", "Chinese Proverb"], ["I respect faith, but doubt is what gets you an education.", "Wilson Mizner"], ["Never ascribe to malice, that which can be explained by incompetence.", "Robert J Hanlon (Hanlon's Razor)"], ["When two men in business always agree, one of them is unnecessary.", "William Wrigley Jr."], ["You can never get enough of what you don't really need.", "Eric Hoffer"], ["To the man who only has a hammer, everything he encounters begins to look like a nail.", "Abraham Maslow"], ["To acquire knowledge, one must study; but to acquire wisdom, one must observe.", "Marilyn vos Savant"], ["Life is 10% what happens to me and 90% of how I react to it.", "Charles Swindoll"], ["A person who trusts no one can't be trusted.", "Jerome Blattner"], ["A happy life is just a string of happy moments. But most people don't allow the happy moment, because they're so busy trying to get a happy life.", "Esther Hicks"], ["A journey of a thousand miles begins with a single step.", "Lao Tzu"], ["A lie can travel halfway around the world while the truth is putting on its shoes.", "Mark Twain"], ["A man is but the product of his thoughts; what he thinks, he becomes.", "Gandhi"], ["A clever person solves a problem. A wise person avoids it.", "Albert Einstein"], ["A complex system that does not work is invariably found to have evolved from a simpler system that worked just fine.", "Murphy's Law of Computing"], ["You can do anything, but not everything.", "David Allen"], ["You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.", "Naguib Mahfouz"], ["You can fool some of the people all of the time, and all of the people some of the time, but you cannot fool all of the people all of the time.", "Abraham Lincoln"], ["You can never cross the ocean until you have the courage to lose sight of the shore.", "Christopher Columbus"], ["You almost never get the pleasure of seeing that you won the argument in real time. People just don't like to publicly change their minds. They change their minds in private.", "Sam Harris"], ["Who looks outside, dreams; who looks inside, awakes.", "Carl Jung"], ["Wisdom is knowing the right path to take. Integrity is taking it.", "M. H. McKee"], ["Wise men talk because they have something to say; fools, because they have to say something.", "Plato"]];

var pokerQuotes = [["Avoid people with gold teeth who want to play cards.", "George Carlin"], ["Gambling, the sure way of getting nothing for something.", "Wilson Mizner"], ["I never saw a poker player's money that I did not like.", "Oklahoma Johnny Hale"], ["If there weren't luck involved, I would win every time.", "Phil Hellmuth"], ["If you can't spot the sucker in the first half hour at the table, then you are the sucker.", "Matt Damon"], ["It's morally wrong to let a sucker keep money.", "Canada Bill Jones"], ["It's not whether you won or lost, but how many bad beat stories you were able to tell.", "Grantland Rice"], ["Life is like a game of cards. The hand that is dealt you is determinism; the way you play it is free will.", "Jawaharlal Nehru"], ["Money won is twice as sweet as money earned.", "Paul Newman"], ["Never give a sucker an even break.", "Anonymous"], ["Show me a good loser, and I'll show you a loser.", "Stu Ungar"], ["The next best thing to gambling and winning is gambling and losing.", "Nick 'The Greek' Dandalos"], ["The single greatest key to winning is knowing thy enemy - yourself.", "Andy Glazer"], ["There is more to poker than life.", "Tom McEvoy"], ["They say poker is a zero-sum game. It must be, because every time I play my sum ends up zero.", "Max Shapiro"], ["To be a poker champion, you must have a strong bladder.", "Jack McClelland"], ["Trust everyone, but always cut the cards.", "Benny Binion"]];

var sportsQuotes = [["Every strike brings me closer to the next home run.", "Babe Ruth"], ["I can accept failure, but I can't accept not trying.", "Michael Jordan"], ["I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.", "Michael Jordan"], ["If everything's under control, you're going too slow.", "Mario Andretti"], ["The battles that count aren't the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that's where it's at.", "Jesse Owens"], ["There are no traffic jams along the extra mile.", "Roger Staubach"], ["Winning isn't everything, but wanting to win is.", "Vince Lombardi"], ["You miss 100% of the shots you don't take.", "Wayne Gretzky"]];

var allQuotes = financeQuotes.concat(humorousQuotes, inspirationalQuotes, pokerQuotes, sportsQuotes, );





/* INITIAL QUOTE FUNCTION:  Function to display the quote of the day after 
the page loads.  Selects a random quote from all quotes */
function quoteOfDay() {
	
	/* Selects a random number between 1 and allQuotes.length */
	var i = Math.floor((Math.random()* allQuotes.length)+1);
	currentQuote = allQuotes[i-1]; //need to subtract 1 to start w/ 0 index

	document.getElementById("quote").innerHTML = currentQuote[0];

	document.getElementById("quoteAuthor").innerHTML = currentQuote[1];
}


/* USER SELECTED QUOTE FUNCTION:  Function to display new quote after user 
clicks button */
function newQuote(category) {
	
  /* Selects a random number between 1 and allQuotes.length */
	var quote_Category = category;

  	var i = Math.floor((Math.random()* quote_Category.length)+1);
	currentQuote = quote_Category[i-1]; //need to subtract 1 to start w/ 0 index
	
	document.getElementById("quote").innerHTML = currentQuote[0];
	
	document.getElementById("quoteAuthor").innerHTML = currentQuote[1];
  
  /*changes h2 to match quote category selected by user */
  	switch(category) {
    	case financeQuotes:
      		x= "Finance Quote:";
      		break;
      	case humorousQuotes:
      		x= "Humorous Quote:";
      		break;
      	case inspirationalQuotes:
      		x= "Inspirational Quote:";
      		break;
    	case pokerQuotes:
      		x= "Poker Quote:";
      		break;
    	case sportsQuotes:
      		x= "Sports Quote:";
      		break;
    	case allQuotes:
     		 x= "Surprise Quote:";
      		break;
  	}
  
  document.getElementById("quoteHeader").innerHTML = x;
}

/* TWEET QUOTE FUNCTION:  Function to tweet quote currently being displayed */
function tweetQuote() {
  var tweetText = '"' + currentQuote[0] + '" by ' + currentQuote[1];
  window.open ("https://twitter.com/intent/tweet?hashtags=quotes&related&text=" + tweetText);  
}





