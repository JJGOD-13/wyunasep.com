import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Button } from "@/components/ui/button"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="grid place-items-center h-screen">
    Hello There
    <Button size='lg' variant='ghost'>Press Me</Button>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
