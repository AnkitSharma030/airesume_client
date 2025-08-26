const customerReview=[{
  review:"“Very cool stuff btw. It doesn't feel like just AI-generated recap of my bullet points”",
  name:'TikTok, Tapon'
},
{
   review:"“Very cool stuff btw. It doesn't feel like just AI-generated recap of my bullet points”",
  name:'TikTok, Tapon'
},
{
   review:"“Very cool stuff btw. It doesn't feel like just AI-generated recap of my bullet points”",
  name:'TikTok, Tapon'
}]

export default function Review(){
    return(
          <section className="bg-black py-16">
        <div className="items-center font-bold">
          <p className="text-center text-2xl text-[#9E9E9E] ">Here is what our customers are saying</p>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 gap-6
         text-[#9E9E9E] px-4">
          {customerReview.map((item,index)=>(
            <div className="rounded-xl bg-[#303030] py-4" key={index}>
              <h2 className="px-2">{item.review}</h2>
              <h3 className="mt-10 ml-4 ">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>
    )
}