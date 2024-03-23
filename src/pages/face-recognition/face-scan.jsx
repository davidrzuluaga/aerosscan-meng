import { useState } from "react";
import Webcam from "react-webcam";
import styled from "@emotion/styled";

export const FaceScan = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const scanImage = async (imageSrc) => {
    const randomBool = () => Math.random() >= 0.5;
    setImageSrc(imageSrc);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setScanResult(randomBool());
    }, 2000);
  };

  const FaceScanStyles = styled.div`
    .scan-result {
      color: white;
    }
  `;

  return (
    <FaceScanStyles>
      {imageSrc ? (
        <div>
          <img src={imageSrc} alt="captured" />
          <p className="scan-result">
            {loading ? (
              "Analyzing..."
            ) : (
              <>{scanResult ? "Autorizado" : "No autorizado"}</>
            )}
          </p>
          <button onClick={() => setImageSrc(null)}>Retake photo</button>
        </div>
      ) : (
        <Webcam height={600} width={600} screenshotFormat="image/jpeg">
          {({ getScreenshot }) => (
            <button
              onClick={() => {
                const imageSrc = getScreenshot();
                scanImage(imageSrc);
              }}
            >
              Capture photo
            </button>
          )}
        </Webcam>
      )}
    </FaceScanStyles>
  );
};
