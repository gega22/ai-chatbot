// script.js
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatHistory = document.querySelector('.chat-history');

// Function to create and display a message (reusable)
function displayMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.textContent = message;
    if (isUser) {
        messageElement.classList.add('user-message');
    } else {
        messageElement.classList.add('bot-message');
    }
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to bottom after adding message
}

// Event listener for send button click
sendButton.addEventListener('click', function() {
    const userMessage = messageInput.value;
    messageInput.value = ''; // Clear input field after sending

    // Simulate bot response (replace with actual AI integration)
    const botResponse = "Thanks for your message! I'm still under development, but I'm learning.";
    displayMessage(userMessage, true);  // Display user message
    displayMessage(botResponse, false); // Display bot response (simulated)
});
