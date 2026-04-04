import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobs = [
  {
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png",
    company: "Google",
    posted: "5 days ago",
    position: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    salary: "$30/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://www.tripfiction.com/wp-content/uploads/2016/08/1920x1080-brands-amazon-logo.jpg",
    company: "Amazon",
    posted: "2 weeks ago",
    position: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$45/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://tse1.mm.bing.net/th/id/OIP.-HIrpRMx0kqqSEVJxOFMsgHaEB?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Apple",
    posted: "1 week ago",
    position: "iOS Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    salary: "$35/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://tse2.mm.bing.net/th/id/OIP.UB7pR-gAzuRlJGTbURYkUwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Meta",
    posted: "3 days ago",
    position: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$40/hr",
    location: "Delhi, India"
  },
  {
    logo: "https://tse2.mm.bing.net/th/id/OIP.p3M01GgL82veSWBsEJ81tQHaE7?w=730&h=486&rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Netflix",
    posted: "10 days ago",
    position: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$50/hr",
    location: "Pune, India"
  },
  {
    logo: "https://blog.logomaster.ai/hs-fs/hubfs/Microsoft-logo-2.jpg?width=2016&height=1344&name=Microsoft-logo-2.jpg",
    company: "Microsoft",
    posted: "6 days ago",
    position: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    salary: "$38/hr",
    location: "Noida, India"
  },
  {
    logo: "https://tse2.mm.bing.net/th/id/OIP.tBxqXYGufdbsXBFIzBRm-wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Adobe",
    posted: "8 days ago",
    position: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    salary: "$32/hr",
    location: "Gurgaon, India"
  },
    {
    logo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-cover.jpg?width=2016&height=1344&name=ibm-logo-cover.jpg",
    company: "IBM",
    posted: "7 days ago",
    position: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$42/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://tse1.mm.bing.net/th/id/OIP.5ghidMJV9MiyatcrVV-OMgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Oracle",
    posted: "3 weeks ago",
    position: "Database Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    salary: "$28/hr",
    location: "Chennai, India"
  },
  {
    logo: "https://tse1.mm.bing.net/th/id/OIP.Gh8k1gS5C-mc1W9h1Z3LSQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Tesla",
    posted: "4 days ago",
    position: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$55/hr",
    location: "Mumbai, India"
  }
];

  return (
    <div className='parent'>
      {jobs.map((job) => (
        <Card  logo={job.logo} company={job.company} posted={job.posted} position={job.position} tag1={job.tag1} tag2={job.tag2} salary={job.salary} location={job.location} />
      ))}
    </div>
  )
}

export default App
