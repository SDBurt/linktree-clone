import data from '../data.json'
import HomePage from './HomePage';

export default async function Home() {
  return <HomePage data={data} />;
}

