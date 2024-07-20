// lib/getPlayerStaticPaths.ts
import path from 'path';
import fs from 'fs';

interface Player {
  korName: string;
  backNum: string;
  playerImg: string;
}

export async function getPlayerStaticPaths(fileName: { fileName: string }) {
  const filePath = path.join(process.cwd(), 'data', `${fileName}.json`);
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const paths = jsonData.data.list.map((player: Player) => ({
    params: { backNum: player.backNum },
  }));

  return {
    paths,
    fallback: true,
  };
}
