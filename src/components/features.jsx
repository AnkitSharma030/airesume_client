const analyzerFeatures=[{
  title:"Your resume score is not just a generic rating; it's a measure of how well your resume aligns with a specific job description. That's why uploading a job description is essential — it allows the system to evaluate your resume's relevance to the role you're targeting.",
  features:"Tailored Scoring for Job Descriptions"
},
{
  title:"Your resume score is not just a generic rating; it's a measure of how well your resume aligns with a specific job description. That's why uploading a job description is essential — it allows the system to evaluate your resume's relevance to the role you're targeting.",
  features:"Tailored Scoring for Job Descriptions"
},
{
  title:"Your resume score is not just a generic rating; it's a measure of how well your resume aligns with a specific job description. That's why uploading a job description is essential — it allows the system to evaluate your resume's relevance to the role you're targeting.",
  features:"Tailored Scoring for Job Descriptions"
},
{
  title:"Your resume score is not just a generic rating; it's a measure of how well your resume aligns with a specific job description. That's why uploading a job description is essential — it allows the system to evaluate your resume's relevance to the role you're targeting.",
  features:"Tailored Scoring for Job Descriptions"
},
]

export default function Features(){
    return(
           <section className="bg-black py-16">
        <div className="text-center text-2xl text-[#9E9E9E] font-bold">
          <p>Why choose our AI Analyzer</p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 text-[#9E9E9E] gap-4 rounded-xl p-12">
          {analyzerFeatures.map((items,index)=>(
            <div className="bg-[#303030] rounded-xl" key={index}>
            <h2 className="p-2 text-xl text-blue-600">{items.features}</h2>
              <h2 className="p-2 text-lg">{items.title}</h2>
            </div>
          ))}
        </div>
      </section>
    )
}