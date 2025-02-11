import { JobList } from "@/components/job-list"
import { JobFilters } from "@/components/job-filters"
import { CreateJobButton } from "@/components/create-job-button"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 ml-24 mr-24 rounded-full">
      <header className="py-4 bg-white shadow-sm ml-24 mr-24 rounded-full">
       <div className="container mx-auto flex items-center justify-around px-8 rounded-full">
    
    <div className="flex items-center ">
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-md flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-white">
          <path d="M12 6l4 4-4 4M8 6l4 4-4 4" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>

    
    <nav className="flex space-x-12">
      <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">Find Jobs</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">Find Talents</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">About us</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">Testimonials</a>
    </nav>

    
    <div className="justify-around">
      <CreateJobButton/>
    </div>
  </div>
</header>


        <main className="py-6">
          <JobFilters />
          <JobList />
        </main>
      </div>
    </div>
  )
}

