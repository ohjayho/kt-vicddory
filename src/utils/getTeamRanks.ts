import year_rank from '#/data/year_rank.json';
import daily_rank from '#/data/daily_rank.json';
import {
  TDailyData,
  TLeagueDailyData,
  TLeagueYearData,
  TRanking,
  TYearData,
} from '@/types';

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
    const year: number = date.getFullYear();
    const month: string = String(date.getMonth() + 1).padStart(2, '0');
    const day: string = String(date.getDate()).padStart(2, '0');
    return Number(`${year}${month}${day}`);
  };

  const yearRankJson: TLeagueYearData = year_rank;
  const dailyRankJson: TLeagueDailyData = daily_rank;
  const baseJson: TLeagueYearData | TLeagueDailyData =
    page === 'year' ? yearRankJson : dailyRankJson;

  const yearRank: (number | null)[] = [];

  const formatStartDate: number | undefined = formatDate(
    startDate?.toISOString(),
  );
  const formatEndDate: number | undefined = formatDate(endDate?.toISOString());

  if (page === 'daily') {
    const filteredDailyRank: TDailyData[] = dailyRankJson.filter(
      (item: TDailyData): boolean => {
        const itemDate = new Date(item.day);
        return (
          (!formatStartDate ||
            itemDate.valueOf() >= formatStartDate.valueOf()) &&
          (!formatEndDate || itemDate.valueOf() <= formatEndDate.valueOf())
        );
      },
    );

    filteredDailyRank.forEach((item: TDailyData): void => {
      const teamData: TRanking | undefined = item.data.find(
        (v: TRanking) => v.team === teamName,
      );
      yearRank.push(teamData ? teamData.rank : null);
    });
  } else {
    baseJson.forEach((item: TYearData | TDailyData) => {
      const teamData: TRanking | undefined = item.data.find(
        (v: TRanking): boolean => v.team === teamName,
      );
      yearRank.push(teamData ? teamData.rank : null);
    });
  }

  return yearRank;
};
