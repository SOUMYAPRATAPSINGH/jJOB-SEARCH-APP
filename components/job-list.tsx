import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Building2 } from "lucide-react"


interface Job {
  id: number
  title: string
  company: string
  logo: string
  location: string
  type: string
  experience: string
  postedAgo: string
  description: string
}

export function JobList() {
  const jobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Amazon",
      logo: "",
      location: "Onsite",
      type: "12LPA",
      experience: "1-3 yr Exp",
      postedAgo: "24h Ago",
      description:" A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized",
    },
    {
      id: 2,
      title: "Node.js Developer",
      company: "Tesla",
      logo: "",
      location: "Onsite",
      type: "12LPA",
      experience: "1-3 yr Exp",
      postedAgo: "24h Ago",
       description:"A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Amazon",
      logo: "",
      location: "Onsite",
      type: "12LPA",
      experience: "1-3 yr Exp",
      postedAgo: "24h Ago",
      description:" A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized",
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "Amazon",
      logo: "",
      location: "Onsite",
      type: "12LPA",
      experience: "1-3 yr Exp",
      postedAgo: "24h Ago",
      description:" A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized",
    },
    {
      id: 5,
      title: "Full Stack Developer",
      company: "Amazon",
      logo: "",
      location: "Onsite",
      type: "12LPA",
      experience: "1-3 yr Exp",
      postedAgo: "24h Ago",
      description:" A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized",
    },
    {
      id: 6,
      title: "Full Stack Developer",
      company: "Amazon",
      logo: "",
      location: "Onsite",
      type: "12LPA",
      experience: "1-3 yr Exp",
      postedAgo: "24h Ago",
      description:" A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized",
    },
    {
      id: 7,
      title: "Full Stack Developer",
      company: "Amazon",
      logo: "",
      location: "Onsite",
      type: "12LPA",
      experience: "1-3 yr Exp",
      postedAgo: "24h Ago",
      description:" A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized",
    },
    {
      id: 8,
      title: "Full Stack Developer",
      company: "Amazon",
      logo: "",
      location: "Onsite",
      type: "12LPA",
      experience: "1-3 yr Exp",
      postedAgo: "24h Ago",
      description:" A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized",
    },
    {
      id: 9,
      title: "Full Stack Developer",
      company: "Amazon",
      logo: "",
      location: "Onsite",
      type: "12LPA",
      experience: "1-3 yr Exp",
      postedAgo: "24h Ago",
      description:" A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized",
    },
  ]

  function JobCard({ job }: { job: Job }) {
    return (
      <Card className="bg-white">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-4 flex-col">
            <div className="w-12 h-12 bg-white rounded-lg shadow-sm p-2 flex items-center justify-center">
              ok
            </div>
            <div>
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-gray-600 text-sm">{job.company}</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-blue-50 text-blue-600 rounded-md font-normal">
            {job.postedAgo}
          </Badge>
        </div>
        <div className="space-y-3 mb-4">
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              <span>{job.experience}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Building2 className="h-4 w-4" />
              <span>{job.type}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">{job.description}</p>
        </div>
        <Button className="w-full bg-[#00AAFF] hover:bg-[#0096CE] text-white" variant="default">
          Apply Now
        </Button>
      </CardContent>
    </Card>
    )
  }

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}