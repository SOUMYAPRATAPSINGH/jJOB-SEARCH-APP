"use client"

import { Search, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function JobFilters() {
  return (
    <div className="grid gap-4 md:grid-cols-4 lg:gap-8">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input className="pl-8" placeholder="Search By Job Title, Role" type="search" />
      </div>
      <div className="relative">
        <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input className="pl-8" placeholder="Preferred Location" type="text" />
      </div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Job type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="full-time">Full-time</SelectItem>
          <SelectItem value="part-time">Part-time</SelectItem>
          <SelectItem value="contract">Contract</SelectItem>
          <SelectItem value="internship">Internship</SelectItem>
        </SelectContent>
      </Select>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Salary Per Month</span>
          <span>₹50k - ₹80k</span>
        </div>
        <Slider defaultValue={[50000, 80000]} max={100000} min={0} step={1000} />
      </div>
    </div>
  )
}

