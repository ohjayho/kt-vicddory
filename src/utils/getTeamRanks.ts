import year_rank from '#/data/year_rank.json';
import { TLeagueData } from '@/types';

export const getTeamRanks = (teamName: string) => {
  const yearRankJson: TLeagueData = year_rank;

  const yearRank: (number | null)[] = [];

  yearRankJson.forEach((item) => {
    const teamData = item.data.find((v) => v.team === teamName);
    yearRank.push(teamData ? teamData.rank : null);
  });

  return yearRank;
};
