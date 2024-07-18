import year_rank from '#/data/year_rank.json';

export const getTeamRanks = (teamName: string) => {
  const yearRankJson = year_rank;

  const yearRank: any[] = [];

  yearRankJson.forEach((item) => {
    const teamData = item.data.find((v) => v.team === teamName);
    yearRank.push(teamData ? teamData.rank : 'null');
  });

  return yearRank;
};
