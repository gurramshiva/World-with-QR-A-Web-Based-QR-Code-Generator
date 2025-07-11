const generateButton = document.getElementById("generateButton");
const qrCodeContainer = document.getElementById("qrCodeContainer");
const errorMessage = document.getElementById("errorMessage");

generateButton.addEventListener("click", () => {
  const url = document.getElementById("urlInput").value.trim();
  qrCodeContainer.innerHTML = "";
  errorMessage.textContent = "";

  if (url === "") {
    errorMessage.textContent = "Please enter a valid URL.";
    return;
  }

  const qrCode = new Image();
  qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=250x250`;
  qrCode.alt = "QR Code";
  qrCodeContainer.appendChild(qrCode);
});
