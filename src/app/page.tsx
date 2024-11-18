import { ModeToggle } from "@/components/theme-setup";

export default function Home () {
  return (
    <div className="flex size-full flex-col">
      <h1>Welcome to NextJS</h1>
      <ModeToggle/>
    </div>
  )
}
