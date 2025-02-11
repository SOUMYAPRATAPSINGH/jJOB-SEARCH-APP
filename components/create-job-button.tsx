"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CreateJobForm } from "@/components/create-job-form"

export function CreateJobButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white hover:bg-[#6100AD] rounded-full">Create Jobs</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create Job Opening</DialogTitle>
        </DialogHeader>
        <CreateJobForm />
      </DialogContent>
    </Dialog>
  )
}