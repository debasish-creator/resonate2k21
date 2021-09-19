import React, { useState, useEffect } from "react";
import url from "./music.mp3";
import styled from "styled-components";
const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, toggle]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};
const AudioPlayer = () => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <Button onClick={toggle}>{playing ? "Pause" : "Play"}</Button>
    </div>
  );
};

export default AudioPlayer;

const Button = styled.button``;
