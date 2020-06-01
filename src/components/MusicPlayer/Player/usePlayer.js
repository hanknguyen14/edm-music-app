import { useState, useEffect, useRef } from 'react';

const usePlayer = (songs) => {
  const totalSongs = songs.length;
  const lastSongIndex = songs.length - 1;
  const audioRef = useRef();
  const [songIndex, setAudioIndex] = useState(0);
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    // DOM listeners: update React state on DOM events
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);

    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== currentTime) {
      // eslint-disable-next-line no-param-reassign
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  }, [duration, playing, clickedTime, currentTime]);

  const setBackward = () => songIndex && setAudioIndex(songIndex - 1);
  const setForward = () =>
    songIndex !== lastSongIndex && setAudioIndex(songIndex + 1);
  const onEnded = () => {
    // Repeat One
    if (repeat === 1) {
      return setAudioIndex(songIndex);
    }
    // Repeat all
    if (repeat === 2) {
      const nextSongIndex = (songIndex + 1) % totalSongs;
      return setAudioIndex(nextSongIndex);
    }
    return songIndex !== lastSongIndex
      ? setAudioIndex(songIndex + 1)
      : setPlaying(false);
  };

  return {
    audioRef,
    songIndex,
    duration,
    currentTime,
    playing,
    shuffle,
    repeat,
    setPlaying,
    setClickedTime,
    setAudioIndex,
    setShuffle,
    setBackward,
    setForward,
    setRepeat,
    onEnded,
  };
};
export default usePlayer;
