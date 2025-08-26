const taskData = [
  {
    title: 'Smart Resume Analysis',
    description: 'Get instant feedback on your resume’s effectiveness',
    tasks: [
      'Analyzes keyword optimization for ATS systems',
      'Identifies missing crucial skills or experiences',
      'Suggests industry-specific improvements'
    ]
  },
    {
    title: 'Smart Resume Analysis',
    description: 'Get instant feedback on your resume’s effectiveness',
    tasks: [
      'Analyzes keyword optimization for ATS systems',
      'Identifies missing crucial skills or experiences',
      'Suggests industry-specific improvements'
    ]
  },
    {
    title: 'Smart Resume Analysis',
    description: 'Get instant feedback on your resume’s effectiveness',
    tasks: [
      'Analyzes keyword optimization for ATS systems',
      'Identifies missing crucial skills or experiences',
      'Suggests industry-specific improvements'
    ]
  }
];

export default function Tasks(){
    return(
<main>
        <div>
          <div className="bg-black py-16">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8 gap-6 text-[#9E9E9E]">
{taskData.map((task, i) => (
  <div className="p-4 bg-[#303030] rounded-xl" key={i}>
    <h2 className="text-2xl"> {task.title}</h2>
    <p className="text-xl mt-4">{task.description}</p>
    <ul>
      {task.tasks.map((item, index) => (
        <li className="" key={index}>.  {item}</li>
      ))}
    </ul>
  </div>
))}
</div>

          </div>
        </div>
      </main>
    )
}