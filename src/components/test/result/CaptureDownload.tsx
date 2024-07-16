import html2canvas from "html2canvas";
import saveAs from "file-saver";
import { RefObject } from "react";

export async function CaptureDownload(divRef: RefObject<HTMLDivElement>): Promise<void> {
  if (!divRef.current) return;

  try {
    const div = divRef.current;
    const canvas = await html2canvas(div, { scale: 2 });
    canvas.toBlob((blob) => {
      if (blob !== null) {
        saveAs(blob, "result.png");
      }
    });
  } catch (error) {
    console.error("Error converting to image:", error);
  }
}