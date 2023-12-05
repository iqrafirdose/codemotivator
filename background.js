chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'getRandomQuote') {
      const quotes = [
        "Code like you're running out of time because in the world of programming  tomorrow is never promised",
        "Every line of code you write is a step toward making something great. Keep moving forward.",
        "Consistency is the key to becoming a coding master. A little progress every day adds up to big results.",
        "Embrace the challenges of coding, for they are the stepping stones to becoming a better developer.",
        "Coding is not just about typing lines; it's about solving problems and creating solutions.",
        "The best error message is the one that never shows up. Keep refining your code until it runs flawlessly.",
        "In the world of coding, every bug is an opportunity to learn. Embrace them and grow.",
        "Don't just code; craft. Turn your daily code into a work of art that reflects your dedication and skill.",
        "Success in coding is not about the destination but the journey of solving problems and writing elegant solutions.",
        "A coder's journey is paved with challenges. Each challenge is a chance to prove your skills and determination."
       
       

      ];
  
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
  
      sendResponse({ quote: randomQuote });
    }
  });
  