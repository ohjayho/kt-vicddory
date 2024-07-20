'use client';
import { useEffect, useState } from 'react';

export default function NewsTTS({ text }: { text: string }) {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchAudioUrl = async () => {
      try {
        const response = await fetch(`/api/tts`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
          cache: 'no-store',
        });
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
      } catch (e) {
        console.log('Error:', e);
      }
    };
    fetchAudioUrl();
    return () => {
      // 다른 페이지로 이동했을 때 오디오 멈춤
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio, text]);

  const handleAudioPlay = () => {
    if (audioUrl) {
      const newAudio = new Audio(audioUrl);
      setAudio(newAudio);
      newAudio.play();
    }
  };
  return (
    <>
      <button className="text-red-100" onClick={handleAudioPlay}>
        재생
      </button>
      {/* {audioUrl && (
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
        </audio>
      )} */}
    </>
  );
}
