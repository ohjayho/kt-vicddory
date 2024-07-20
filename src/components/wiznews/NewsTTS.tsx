'use client';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function NewsTTS({
  text,
  audioUrl,
  setAudioUrl,
}: {
  text: string;
  audioUrl: string | null;
  setAudioUrl: Dispatch<SetStateAction<string | null>>;
}) {
  let audio: HTMLAudioElement | null = null;

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
    if (audioUrl) {
      audio = new Audio(audioUrl);
    }
  }, []);

  const handleAudioPlay = () => {
    if (audio) {
      audio.play();
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
