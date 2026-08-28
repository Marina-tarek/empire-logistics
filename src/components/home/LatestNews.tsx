import { homeSections } from "@/data/homeSectionsTitle"
import SectionTitle from "../common/SectionTitle"
import ViewAllButton from "../common/ViewAllButton"
import { News } from "@/data/news"
import NewsCard from "../common/NewsCard"

function LatestNews() {
  return (
    <section id="latestNews" className="bg-[#F5F4F4]">
<div className="container-custom py-30">
    {/* title */}
    <div>
<SectionTitle {...homeSections.latestNews} variant="light" align="center"/>
    </div>
    {/* news card */}
    <div className="lg:pt-12 lg:pb-18 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
{
    News.map((latestNew,index)=>(<NewsCard key={index} {...latestNew}/>))
}
    </div>
    <div>
        <ViewAllButton className="text-[#4C4C4C] border-[#4c4c4c]">View All </ViewAllButton>
    </div>
</div>
    </section>
  )
}

export default LatestNews