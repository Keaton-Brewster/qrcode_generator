import * as React from "react";
import QRCode from "qrcode.react";
import "./CSS/qrcode.css";

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

  const qrCode = url ? (
    <QRCode
      id="qrCodeElToRender"
      size={300}
      value={url}
      bgColor="white"
      fgColor="#141926"
      level="L"
    />
  ) : (
    <></>
  );

  return (
    <div className="qr-container">
      <form onSubmit={downloadQRCode} className="qr-form">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        />

        <button type="submit">Download QR Code</button>
      </form>

      <div className="qr-code" ref={qrRef}>
        {qrCode}
      </div>
    </div>
  );
}
