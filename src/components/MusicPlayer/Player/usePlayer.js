import { useState, useEffect, useRef } from 'react';
// import getRandomArrayIndex from 'utils/helpers';

const usePlayer = (songs) => {
  const lastSongIndex = songs.length - 1;
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
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
  }, [playing, clickedTime, currentTime]);

  const setBackward = () => audioIndex && setAudioIndex(audioIndex - 1);
  const setForward = () =>
    audioIndex !== lastSongIndex && setAudioIndex(audioIndex + 1);
  const onEnded = () => {
    if (repeat === 1) {
      return setAudioIndex(audioIndex);
    }
    if (repeat === 2) {
      return setAudioIndex(audioIndex + 1);
    }
    // if (shuffle) {
    //   const shuffleIndex = getRandomArrayIndex(songs.length);
    //   setAudioIndex(shuffleIndex);
    // }
    return audioIndex !== lastSongIndex
      ? setAudioIndex(audioIndex + 1)
      : setPlaying(false);
  };

  return {
    audioRef,
    audioIndex,
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
