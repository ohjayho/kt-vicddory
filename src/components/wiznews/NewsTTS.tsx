'use client';
import { PiUserSound } from 'react-icons/pi';
import { useEffect, useState } from 'react';

export default function NewsTTS({ text }: { text: string | undefined | null }) {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
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

  if (loading) {
    return <div>Loading TTS...</div>;
  }
  return (
    <>
      <button
        className="flex justify-center items-center text-[#ed2024]"
        onClick={handleAudioPlay}
      >
        <PiUserSound size="50px" />
        <h1 className="ml-4">음성 뉴스 듣기</h1>
      </button>
      {/* {audioUrl && (
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
        </audio>
      )} */}
    </>
  );
}
