function sendMessage(user) {
  var inputId = user + '-message';
  var inputElement = document.getElementById(inputId);
  var message = inputElement.value.trim();
  
  if (message) {
    var chatWindow = document.getElementById('chat-window');
    var messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.className = 'message-' + user; 
    chatWindow.appendChild(messageElement);
    
    chatWindow.scrollTop = chatWindow.scrollHeight;
    
      inputElement.value = '';
  }
}

function clearChat() {
  var chatWindow = document.getElementById('chat-window');
  chatWindow.innerHTML = '';
}


document.getElementById('user1-message').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    sendMessage('user1');
  }
});

document.getElementById('user2-message').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    sendMessage('user2');
  }
});
