import year_rank from '#/data/year_rank.json';
import daily_rank from '#/data/daily_rank.json';
import { TLeagueData } from '@/types';

export const getTeamRanks = ({
  teamName,
  page,
  startDate,
  endDate,
}: {
  teamName: string;
  page: string;
  startDate?: Date | undefined;
  endDate?: Date | undefined;
}) => {
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return undefined;
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return Number(`${year}${month}${day}`);
  };

  const yearRankJson: TLeagueData = year_rank;
  const dailyRankJson = daily_rank;
  const baseJson = page === 'year' ? yearRankJson : dailyRankJson;

  const yearRank: (number | null)[] = [];

  const formatStartDate = formatDate(startDate?.toISOString());
  const formatEndDate = formatDate(endDate?.toISOString());

  if (page === 'daily') {
    const filteredDailyRank = dailyRankJson.filter((item) => {
      const itemDate = new Date(item.day);

      return (
        (!formatStartDate || itemDate >= formatStartDate) &&
        (!formatEndDate || itemDate <= formatEndDate)
      );
    });

    filteredDailyRank.forEach((item) => {
      const teamData = item.data.find((v) => v.team === teamName);
      yearRank.push(teamData ? teamData.rank : null);
    });
  } else {
    baseJson.forEach((item) => {
      const teamData = item.data.find((v) => v.team === teamName);
      yearRank.push(teamData ? teamData.rank : null);
    });
  }

  return yearRank;
};
