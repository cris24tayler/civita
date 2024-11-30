document.getElementById("sendButton").addEventListener("click", () => {
    const input = document.getElementById("messageInput");
    const messageText = input.value.trim();
  
    if (messageText) {
      const messages = document.getElementById("messages");
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.textContent = messageText;
  
      messages.prepend(messageElement); // Adiciona no topo
      input.value = "";
    }
  });
  
  document.getElementById("messageInput").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      document.getElementById("sendButton").click();
    }
  });
  