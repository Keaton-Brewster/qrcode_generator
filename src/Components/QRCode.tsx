import * as React from "react";
import QRCode from "qrcode.react";

export default function QrCode() {
  const qrRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const [url, setUrl] = React.useState("");

  const downloadQRCode = (evt: React.FormEvent) => {
    evt.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas?.toDataURL("image/png");
    let anchor = document.createElement("a");
    // @ts-ignore
    anchor.href = image;
    anchor.download = `qrcode.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };

  const qrCode = (
    <QRCode
      id="qrCodeElToRender"
      size={500}
      value={url}
      bgColor="white"
      fgColor="#141926"
      level="H"
      imageSettings={{
        src: "https://cdn.dribbble.com/users/947358/screenshots/8501609/media/32a57be88f30050be4994cc9951995c3.png?compress=1&resize=800x600&vertical=top",
        excavate: true,
        width: 100,
        height: 100
      }}
    />
  );

  return (
    <div className="qr-container">
      <form onSubmit={downloadQRCode} className="qr-container__form">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        />

        <button type="submit">Download QR Code</button>
      </form>

      <div className="qr-container__qr-code" ref={qrRef}>
        {qrCode}
      </div>
    </div>
  );
}
