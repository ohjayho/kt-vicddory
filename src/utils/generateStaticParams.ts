import path from 'path';
import fs from 'fs';
import { IPlayerFront } from '@/types';
export default function generateStaticParams(position: string) {
  const filePath = path.join(
    process.cwd(),
    'public/data/playerFront',
    `${position}_data.json`,
  );
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const paths = jsonData.data.list.map((player: IPlayerFront) => ({
    pitcherId: player.backNum.toString(),
  }));

  return paths;
}
