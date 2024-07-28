import { useCallback, RefObject } from 'react';
import { toPng } from 'html-to-image';

const useCaptureResult = (ref: RefObject<HTMLDivElement>) => {
  const handleCapture = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'vicddory.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Failed to download image', err);
      });
  }, [ref]);

  return handleCapture;
};

export default useCaptureResult;
