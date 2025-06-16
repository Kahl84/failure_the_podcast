import episodesData from '@/data/episodes.json';

export type Episode = {
  id: number;
  title: string;
  description: string;
  date: string;
  hosts: string[];
  duration: string | null;
  spotify: {
    episodeUrl: string | null;
    audioEmbedUrl: string | null;
    videoEmbedUrl: string | null;
  };
  status: 'published' | 'coming_soon';
};

export type PodcastInfo = {
  name: string;
  description: string;
  hosts: string[];
  spotify: {
    showUrl: string;
  };
};

export function useEpisodes() {
  const episodes = episodesData.episodes as Episode[];
  const podcastInfo = episodesData.podcast as PodcastInfo;
  
  const publishedEpisodes = episodes.filter(episode => episode.status === 'published');
  const latestEpisode = publishedEpisodes[publishedEpisodes.length - 1];
  
  return {
    episodes,
    publishedEpisodes,
    latestEpisode,
    podcastInfo
  };
}
