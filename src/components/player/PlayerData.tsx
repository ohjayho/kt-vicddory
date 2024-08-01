'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  IBatterPlayerData,
  IPitcherPlayerData,
  TBatterYearRecord,
  TPitcherYearRecord,
  IPitcherGameRecord,
  IBatterGameRecord,
  IBatterGameRecordFutures,
  IPitcherGameRecordFutures,
  TPitcherSeasonSummary,
  IBatterSeasonSummary,
  TPitcherSeasonSummaryFutures,
  IBatterSeasonSummaryFutures,
} from '@/types';

interface PlayerData {
  player: IPitcherPlayerData | IBatterPlayerData | null;
}

export default function PlayerData({ player }: PlayerData) {
  const [detailButton, setDetailButton] = useState(false);
  const onDetailHandler = () => {
    setDetailButton(!detailButton);
  };
  const playerRecentRecord:
    | IPitcherGameRecord[]
    | IBatterGameRecord[]
    | undefined = player?.data.recentgamerecordlist || [];
  const playerRecentFuturesRecord:
    | IBatterGameRecordFutures[]
    | IPitcherGameRecordFutures[]
    | undefined = player?.data.recentgamerecordlistfutures || [];
  const playerSeason: TPitcherSeasonSummary | IBatterSeasonSummary | undefined =
    player?.data.seasonsummary || undefined;
  const playerSeasonFutures:
    | TPitcherSeasonSummaryFutures
    | IBatterSeasonSummaryFutures
    | undefined = player?.data.seasonsummaryfutures || undefined;
  const playerYearRecord:
    | TPitcherYearRecord[]
    | TBatterYearRecord[]
    | undefined = player?.data.yearrecordlist || [];

  // 데이터 나누기

  if (!playerYearRecord || playerYearRecord.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      <div className="flex text-white justify-center align-middle p-4 pb-6">
        <div className="flex absolute justify-center">
          <button
            className="h-8 w-fit mx-2 flex flex-row"
            onClick={onDetailHandler}
          >
            <Image
              src={'/svgs/arrow-right.svg'}
              alt="> "
              width={32}
              height={32}
              className={`${detailButton ? 'rotate-90' : 'rotate-0'}`}
            />
            <div className="text-lg">선수 기록 상세보기</div>
          </button>
        </div>
        {detailButton && (
          <div>
            <div className="container mx-auto p-4">
              {!playerSeason && (
                <>
                  <h2 className="text-lg font-bold my-4">
                    2024 시즌 정규리그 기록
                  </h2>
                  <table className="min-w-full border-collapse block md:table text-center text-black text-sm">
                    <thead className="block md:table-header-group">
                      <tr className="border border-gray-300 md:border-none block md:table-row">
                        {Object.keys(!playerSeason)
                          .filter(
                            (key) =>
                              !['playerName', 'pcode', 'gyear'].includes(key),
                          )
                          .map((key, index) => (
                            <th
                              key={index}
                              className="bg-orange-300 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-center block md:table-cell"
                            >
                              {key === 'innDisplay'
                                ? '이닝'
                                : key === 'gamenum'
                                  ? '경기'
                                  : key.toUpperCase()}
                            </th>
                          ))}
                      </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                      <tr className="bg-gray-100 border border-gray-300 md:border-none block md:table-row">
                        {Object.entries(!playerSeason)
                          .filter(
                            ([key]) =>
                              !['playerName', 'pcode', 'gyear'].includes(key),
                          )
                          .map(([key, value], valueIndex) => (
                            <td
                              key={valueIndex}
                              className="p-2 md:border md:border-gray-300 text-center block md:table-cell"
                            >
                              <div className="hidden">{key}</div>
                              <div className="hidden">{value}</div>
                            </td>
                          ))}
                      </tr>
                    </tbody>
                  </table>
                </>
              )}
              {playerRecentRecord && playerRecentRecord.length > 0 && (
                <>
                  <h2 className="text-lg font-bold my-4">최근 5경기 기록</h2>
                  <table className="min-w-full border-collapse block md:table text-black text-center text-sm">
                    <thead className="block md:table-header-group">
                      <tr className="border border-gray-300 md:border-none block md:table-row">
                        <th className="bg-orange-300 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-center block md:table-cell">
                          날짜
                        </th>
                        <th className="bg-orange-300 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-center block md:table-cell">
                          상대 팀
                        </th>
                        {Object.keys(playerRecentRecord[0])
                          .filter(
                            (key) =>
                              key !== 'displayDate' &&
                              key !== 'matchTeamCode' &&
                              key !== 'matchTeamName',
                          )
                          .map((key, index) => (
                            <th
                              key={index}
                              className="bg-orange-300 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-center block md:table-cell"
                            >
                              {key === 'innDisplay'
                                ? '이닝'
                                : key.toUpperCase()}
                            </th>
                          ))}
                      </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                      {playerRecentRecord.map((record, recordIndex) => (
                        <tr
                          key={recordIndex}
                          className="bg-gray-100 border border-gray-300 md:border-none block md:table-row"
                        >
                          <td className="p-2 md:border md:border-gray-300 text-center block md:table-cell">
                            {record.displayDate}
                          </td>
                          <td className="p-2 md:border md:border-gray-300 text-center block md:table-cell">
                            {record.matchTeamName}
                          </td>
                          {Object.entries(record)
                            .filter(
                              ([key]) =>
                                key !== 'displayDate' &&
                                key !== 'matchTeamCode' &&
                                key !== 'matchTeamName',
                            )
                            .map(([key, value], valueIndex) => (
                              <td
                                key={valueIndex}
                                className="p-2 md:border md:border-gray-300 text-center block md:table-cell"
                              >
                                {' '}
                                <div className="hidden">{key}</div>
                                {typeof value === 'object'
                                  ? JSON.stringify(value)
                                  : value}
                              </td>
                            ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              {playerYearRecord && playerYearRecord.length > 0 && (
                <>
                  <h2 className="text-lg font-bold my-4">kt wiz 통산 기록</h2>
                  <table className="min-w-full border-collapse block md:table text-black text-center text-sm">
                    <thead className="block md:table-header-group">
                      <tr className="border border-gray-300 md:border-none block md:table-row">
                        <th className="bg-orange-300 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-center block md:table-cell">
                          연도
                        </th>
                        <th className="bg-orange-300 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-center block md:table-cell">
                          경기
                        </th>
                        {Object.keys(playerYearRecord[0])
                          .filter(
                            (key) =>
                              key !== 'teamCode' &&
                              key !== 'teamName' &&
                              key !== 'gyear' &&
                              key !== 'gamenum',
                          )
                          .map((key, index) => (
                            <th
                              key={index}
                              className="bg-orange-300 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-center block md:table-cell"
                            >
                              {key === 'innDisplay'
                                ? '이닝'
                                : key.toUpperCase()}
                            </th>
                          ))}
                      </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                      {playerYearRecord.map((record, recordIndex) => (
                        <tr
                          key={recordIndex}
                          className="bg-gray-100 border border-gray-300 md:border-none block md:table-row"
                        >
                          <td className="p-2 md:border md:border-gray-300 text-center block md:table-cell">
                            {record.gyear}
                          </td>
                          <td className="p-2 md:border md:border-gray-300 text-center block md:table-cell">
                            {record.gamenum}
                          </td>
                          {Object.entries(record)
                            .filter(
                              ([key]) =>
                                key !== 'teamCode' &&
                                key !== 'teamName' &&
                                key !== 'gyear' &&
                                key !== 'gamenum',
                            )
                            .map(([key, value], valueIndex) => (
                              <td
                                key={valueIndex}
                                className="p-2 md:border md:border-gray-300 text-center block md:table-cell"
                              >
                                {' '}
                                <div className="hidden">{key}</div>
                                {typeof value === 'object'
                                  ? JSON.stringify(value)
                                  : value}
                              </td>
                            ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
              <h1 className="text-xl font-bold m-4">퓨처스리그 </h1>

              {!playerSeasonFutures && (
                <>
                  <h2 className="text-lg font-bold my-4">
                    2024 시즌 퓨처스리그 기록
                  </h2>
                  <table className="min-w-full border-collapse block md:table text-black text-center text-sm">
                    <thead className="block md:table-header-group">
                      <tr className="border border-gray-300 md:border-none block md:table-row">
                        {Object.keys(!playerSeasonFutures)
                          .filter(
                            (key) =>
                              !['playerName', 'pcode', 'gyear'].includes(key),
                          )
                          .map((key, index) => (
                            <th
                              key={index}
                              className="bg-orange-300 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-center block md:table-cell"
                            >
                              {key === 'innDisplay'
                                ? '이닝'
                                : key === 'gamenum'
                                  ? '경기'
                                  : key.toUpperCase()}
                            </th>
                          ))}
                      </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                      <tr className="bg-gray-100 border border-gray-300 md:border-none block md:table-row">
                        {Object.entries(!playerSeason)
                          .filter(
                            ([key]) =>
                              !['playerName', 'pcode', 'gyear'].includes(key),
                          )
                          .map(([key, value], valueIndex) => (
                            <td
                              key={valueIndex}
                              className="p-2 md:border md:border-gray-300 text-center block md:table-cell"
                            >
                              <div className="hidden">{key}</div>
                              <div className="hidden">{value}</div>
                            </td>
                          ))}
                      </tr>
                    </tbody>
                  </table>
                </>
              )}
              {playerRecentFuturesRecord &&
                playerRecentFuturesRecord.length > 0 && (
                  <>
                    {' '}
                    <h2 className="text-lg font-bold my-4">
                      퓨처스리그 최근 5경기 기록
                    </h2>
                    <table className="min-w-full border-collapse block md:table text-black items-center text-center text-sm">
                      <thead className="block md:table-header-group text-center">
                        <tr className="border border-gray-300 md:border-none block md:table-row text-center">
                          <th className="bg-orange-300 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-center block md:table-cell">
                            날짜
                          </th>
                          <th className="bg-orange-300 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-center block md:table-cell">
                            상대 팀
                          </th>
                          {Object.keys(playerRecentFuturesRecord[0])
                            .filter(
                              (key) =>
                                key !== 'displayDate' &&
                                key !== 'matchTeamCode' &&
                                key !== 'matchTeamName',
                            )
                            .map((key, index) => (
                              <th
                                key={index}
                                className="bg-orange-300 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-center block md:table-cell"
                              >
                                {key === 'innDisplay'
                                  ? '이닝'
                                  : key.toUpperCase()}
                              </th>
                            ))}
                        </tr>
                      </thead>
                      <tbody className="block md:table-row-group">
                        {playerRecentFuturesRecord.map(
                          (record, recordIndex) => (
                            <tr
                              key={recordIndex}
                              className="bg-gray-100 border border-gray-300 md:border-none block md:table-row"
                            >
                              <td className="p-2 md:border md:border-gray-300 text-center block md:table-cell">
                                {record.displayDate}
                              </td>
                              <td className="p-2 md:border md:border-gray-300 text-center block md:table-cell">
                                {record.matchTeamName}
                              </td>
                              {Object.entries(record)
                                .filter(
                                  ([key]) =>
                                    key !== 'displayDate' &&
                                    key !== 'matchTeamCode' &&
                                    key !== 'matchTeamName',
                                )
                                .map(([key, value], valueIndex) => (
                                  <td
                                    key={valueIndex}
                                    className="p-2 md:border md:border-gray-300 text-center block md:table-cell"
                                  >
                                    <div className="hidden">{key}</div>
                                    {typeof value === 'object'
                                      ? JSON.stringify(value)
                                      : value}
                                  </td>
                                ))}
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </>
                )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
