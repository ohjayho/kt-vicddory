import year_rank from '#/data/year_rank.json';

export const getTeamRanks = (teamName: string) => {
  const yearRankJson = year_rank;

  const yearRank: any[] = [];
  const year: any[] = [];

  // yearRankJson.forEach((item) => {
  //   const teamData = item.data.find((v) => v.team === teamName);
  //   yearRank.push(teamData ? teamData.rank : 'null');
  // });
  yearRankJson.forEach((item) => {
    const teamData = item.data.find((v) => v.team === teamName);
    if (teamData) {
      yearRank.push(teamData.rank);
      year.push(item.year);
    }
  });
  // yearRank.push(teamData ? teamData.rank : 'null');

  return { yearRank, year };
  // return yearRank;
};
