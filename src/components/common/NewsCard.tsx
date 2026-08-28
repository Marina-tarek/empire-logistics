import Image from "next/image"
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card"
import { NewsCardProps } from "@/types/newsCardProps"

function NewsCard({image,title,description,publisherImage,publisherName,publishAt}:NewsCardProps) {
  return (
    <Card className=" mx-auto w-full max-w-sm bg-[#FFFFFF] p-4">
<div className="relative h-[200px]">
          <Image
        src={image}
        alt="blog image"
        fill
        className="absolute w-full object-cover h-full"
      />
</div>
      
        <CardTitle className="text-[20px] leading-8 font-bold text-[#090914]">{title}</CardTitle>
        <CardDescription className="text-[14px] leading-6 text-[#646363]">
          {description}
        </CardDescription>
      
      <CardFooter className="flex bg-white">
        <div className="h-12.5 w-12.5 relative me-2">
            <Image src={publisherImage} fill className="absolute rounded-[100%] h-12.5 w-12.5 object-cover" alt={publisherName +"photo"}/>
        </div>
        <div>
            <h4 className="text-[16px] font-medium leading-6 text-primary">{publisherName}</h4>
            <p className="text-[12px] text-[#808080]">{publishAt}</p>
        </div>
      </CardFooter>
    </Card>
  )
}

export default NewsCard