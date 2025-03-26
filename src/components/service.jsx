import { FaVectorSquare } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const card=[
    {
        id: 1,
        title: "Luxury Facilities",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, elit,Lorem ipsum dolor sit amet, consectetur",
        icon: <FaVectorSquare />,
        link: "#",
        delay: 0.2,
      },
      {
        id: 2,
        title: "Quality Products",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit amet, consectetur",
        icon: <FaPenToSquare />,
        link: "#",
        delay: 0.4,
      },
      {
        id: 3,
        title: "Affordable Price",
        description:
          "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        icon: <RiMoneyDollarCircleFill />,
        link: "#",
        delay: 0.6,
      },
]

export default function Service(){
    return <div className="py-20">
    <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
        <h1 className="text-3xl font-bold font-serif">What We Provide</h1>
        <p className="text-gray-500 text-sm">Bring your dream home to life with one-on-one design help & hand
        picked products</p>
    </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-4">
{card.map((crd)=>{
    return <div key={crd.id} className="space-y-4 border-[1px] border-black/30 p-6 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c]">
    <span className="inline-block border-[2px] border-black rounded-full p-4 text-xl">{crd.icon}</span>
    <p className="text-xl font-bold font-serif">{crd.title}</p>
    <p className="text-gray-400 text-xs">{crd.description}</p>
    <a href={crd.link}  className="inline-block border-b border-black"> learn more</a>
    </div>

})}
     
</div>

    </div>
}