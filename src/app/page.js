import {Header} from "./header"
import {Picture} from "./picture.js"
import {ArticleCard} from "./common/ArticleCard.jsx"
export default function Home() {
  return (
    <div className="bg-black text-white">
      <Header/>
      <div className="text-white font-bold text-2xl md:text-6xl xl:text-9xl border-white border-t border-b border-2 border-solid border-white">
        THE BLOG
      </div>
      <Picture/>
      <ArticleCard/>

    </div>
  );
}
