let qrCode;

function createQRCode() {
  const url = document.getElementById('url').value;
  const bgColor = document.getElementById('bg-color').value;
  const frontColor = document.getElementById('front-color').value;
  const logo = document.getElementById('logo').value;
  const shape = document.getElementById('shape').value;
  const eye = document.getElementById('eye').value;
  const ecLevel = document.getElementById('ec-level').value;

  const container = document.getElementById('qrcode');
  container.innerHTML = '';

  qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    data: url || "https://ejemplo.com",
    image: logo || "",
    qrOptions: {
      errorCorrectionLevel: ecLevel
    },
    dotsOptions: {
      color: frontColor,
      type: shape
    },
    cornersSquareOptions: {
      type: eye
    },
    backgroundOptions: {
      color: bgColor
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 5
    }
  });

  qrCode.append(container);
}

function downloadQR() {
  if (qrCode) {
    qrCode.download({ name: "qr-personalizado", extension: "png" });
  }
}
