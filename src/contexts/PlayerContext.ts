import { createContext } from "react";

  type Episode = {
    title: string;
    members: string
    thumbnail: string
    duration: number
    url: string
  }

type PlayerContextData = {
  // tipagem das informações que eu quero salvar dentro do meu contexto
  episodeList: Episode[]
  currentEpisodeIndex: number
  isPlaying: boolean
  play: (episode: Episode) => void
  setPlayingState: (state: boolean) => void
  togglePlay: () => void
}

export const PlayerContext = createContext({} as PlayerContextData)
/* export const PlayerContext = createContext({
  episodeList: [],
  currentEpisodeIndex: 0,
}) */