import path from 'path';
import fs from 'fs';

interface Player {
  korName: string;
  backNum: string;
  playerImg: string;
}

export async function getPlayerStaticProps(params: { backNum: string }) {
  const backNum = params.backNum;
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const player =
    jsonData.data.list.find((player: Player) => player.backNum === backNum) ||
    null;

  return {
    props: { player },
  };
}
