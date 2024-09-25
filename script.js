

// Variable to track if welcome message has been displayed
var welcomeMessageDisplayed = false;

// Function to toggle chatbot window visibility
function toggleChatbot() {
    var chatbotWindow = document.getElementById("chatbot-window");
    chatbotWindow.style.display = chatbotWindow.style.display === "none" ? "block" : "none";

    // Display welcome message only once when chatbot window is opened
    if (chatbotWindow.style.display === "block" && !welcomeMessageDisplayed) {
        displayMessage("Welcome!I am Liza,How can I help you?", true); // Display welcome message
        welcomeMessageDisplayed = true; // Update flag to indicate welcome message has been displayed
    }
}

// Function to send message (You can implement your own logic)
function sendMessage() {
  var messageInput = document.getElementById("message-input");
  var message = messageInput.value.trim();
  if (message !== "") {
      // Send message logic goes here
      console.log("Message sent:", message);
      messageInput.value = "";

      // Check for relevant tool categories or keywords in user message
      var matchedCategory = matchToolCategory(message);

      if (matchedCategory) {
          // Display tool suggestions based on matched category
          displayToolSuggestions(matchedCategory);
      } else {
          // Display generic response if no relevant category found
          displayMessage("I'm sorry, I couldn't understand your request.");
      }
  }
}
function matchToolCategory(query) {
  var toolCategories = {
      "investigate phone number": "Phone Number Investigation",
      "image decoder":"Image Decoder",
      "hide message in image": "Image Decoder",
      "stegno":"Image Decoder",
      "phishing": "Phishing Attacks",
      "hack username and password": "Phishing Attacks",
      "hack password": "Phishing Attacks",
      "hack instagram": "Phishing Attacks",
      "whatsapp info": "Social-Media OSINT",
      "Social media information": "Social-Media OSINT",
      "location finder": "Geo-Int",
      "location": "Geo-Int",
      "get information about target": "Reconniance",
      "website info": "Reconniance",
      "ip tracker": "IP Logger"
      // Add more mappings as needed, don't forget the commas
  };

  for (var keyword in toolCategories) {
      if (query.toLowerCase().includes(keyword)) {
          return toolCategories[keyword];
      }
  }

  return null;
}
// Function to display tool suggestions based on matched category
function displayToolSuggestions(category) {
  var tools = getToolsForCategory(category);

  if (tools.length > 0) {
      // Sort tools based on their rating (or any other measure of quality)
      tools.sort((a, b) => b.rating - a.rating);

      // Display only the top 3 tools
      var topTools = tools.slice(0, 3);

      var suggestionMessage = "Here are some top tools related to " + category + ":\n";
      suggestionMessage += topTools.map(tool => `${tool.name} (${tool.rating})`).join(", ");
      displayMessage(suggestionMessage, true);
  } else {
      displayMessage("Sorry, no tools found for " + category + ".");
  }
}



// Function to retrieve tools associated with a specific category
function getToolsForCategory(category) {
  var toolSuggestions = {
      "Phone Number Investigation": [
          { name: "Inspector",rating:4.7, link: "https://github.com/N0rz3/Inspector" },
          { name: "Number Info",rating:4.2, link: "https://github.com/3022-2/numberinfo" },
          { name: "PhoneInfoga",rating:4.4, link: "https://github.com/sundowndev/PhoneInfoga" },
          { name: "Numlookup",rating:4.1, link: "https://www.numlookup.com/" }
      ],
          "Image Decoder": [
            { name: "Image Decoder",rating:4.8, link: "https://github.com/thenipunanand/ImgHide" },
           
      ],
      "Phishing Attacks": [
          { name: "Z-Phisher",rating:4.6, link: "https://github.com/htr-tech/zphisher" },
          { name: "SocialFish",rating:4.5, link: "https://github.com/UndeadSec/SocialFish" },
          { name: "Blackeye",rating:4.7, link: "https://github.com/EricksonAtHome/blackeye" },
          { name: "Hidden-Eye",rating:4.8, link: "https://github.com/Morsmalleo/HiddenEye_Legacy" },
          { name: "Shell Fish",rating:4.6, link: "hhttps://github.com/AbirHasan2005/ShellPhish" },
          { name: "GoPhish",rating:4.4, link: "https://getgophish.com/" }
      ],
      "Social-Media OSINT": [
          { name: "Lookup-id",rating:4.4, link: "https://lookup-id.com/" },
          { name: "Imginn",rating:4.3, link: "https://imginn.io/" },
          { name: "PhantomBuster",rating:4.4, link: "https://phantombuster.com/phantombuster" },
          { name: "Reverse Contact",rating:4.2, link: "https://www.reversecontact.com/" },
          { name: "Whatsapp Monitoring",rating:4.5, link: "https://github.com/ErikTschierschke/WhatsappMonitor" }
      ],
      "Geo-Int": [
          { name: "IP-Tracker",rating:4.5, link: "https://github.com/rajkumardusad/IP-Tracer" },
          { name: "Geo-Recon",rating:4.7, link: "git clone https://github.com/radioactivetobi/geo-recon" },
          { name: "Seeker",rating:4.8, link: "git clone https://github.com/thewhiteh4t/seeker" }
      ],
      "Reconniance": [
          { name: "Nmap",rating:4.9, link: "https://github.com/nmap/nmap" },
          { name: "Amaas",rating:4.8, link: "https://github.com/owasp-amass/amass" },
          { name: "Dirb",rating:4.9, link: "https://github.com/v0re/dirb" },
          { name: "Sublist3r",rating:4.7, link: "https://github.com/aboul3la/Sublist3r" },
          { name: "Dns-Recon",rating:4.6, link: "https://github.com/darkoperator/dnsrecon" },
          { name: "Shodan",rating:4.7, link: "https://www.shodan.io/" },
          { name: "Censys",rating:4.5, link: "https://censys.io/" },
          { name: "WaybackUrl's",rating:4.6, link: "https://github.com/tomnomnom/waybackurls" }
      ],
      "IP Logger": [
          { name: "IP-Logger",rating:4.5, link: "https://iplogger.org/" },
          { name: "Grabify",rating:4.7, link: "https://grabify.link/" },
          { name: "Stealer",rating:4.8, link: "https://github.com/3022-2/stealer" }
      ]
      // Add more tool suggestions as needed, don't forget the commas
  };

  // Check if the provided category has associated tools
  if (category in toolSuggestions) {
      return toolSuggestions[category];
  } else {
      return []; // Return an empty array if no tools found for the category
  }
}

// Function to display a message in the chat body
// Function to display a message in the chat body
function displayMessage(message, isChatbotMessage) {
    var chatBody = document.querySelector(".chat-body");
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.className = "chat-message " + (isChatbotMessage ? "chatbot-message" : "user-message");
    chatBody.appendChild(messageElement);

    // Automatically scroll to the bottom of the chat window
    chatBody.scrollTop = chatBody.scrollHeight;
}
