import BBSCardList from "@/features/bbs/components/BBSCardList";
import { BBSData } from "@/features/bbs/types/types";

async function getBBSAllData() {
  // Next13以降でSSGやSSR、ISRなどでデータフェッチングする場合は、fetch関数を使う
  const response = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  const bbsAllData: BBSData[] = await response.json();

  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
