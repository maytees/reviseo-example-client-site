"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Divide, PhoneIcon } from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export default function Page() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <nav className="flex h-12 w-full flex-row items-center justify-between bg-secondary px-10 lg:px-32">
          <h1>Joseph Mackey LLC.</h1>
          <div className="flex flex-row items-center gap-4 text-xs text-muted-foreground">
            <Button variant={"link"} size={"xs"}>
              Instagram
            </Button>
            <Button variant={"link"} size={"xs"}>
              About
            </Button>
            <Button variant={"link"} size={"xs"}>
              Contact
            </Button>
          </div>
        </nav>
        <div className="mt-10 flex flex-col items-center space-y-2">
          <h1 className="font-heading text-5xl font-bold">JP Mackey</h1>
          <p className="mt-1 max-w-96 text-center text-xs text-muted-foreground">
            Crafting unique brainrot content via Instagram reels since 2007.
            With the perfect blend of sracasm and humor, you get the best
            marketing content known to man.
          </p>
          <div className="mt-2.5 flex flex-row items-center gap-2">
            <Button size={"xs"}>
              See Instagram <ArrowRight />
            </Button>
            <Button variant={"outline"} size="xs">
              Contact <PhoneIcon />
            </Button>
          </div>
        </div>
      </div>
      <Script
        onLoad={() => {
          ;((window.ReviseoConfig = {
            projectId: "6b6046dc-5750-4b3a-a5b8-113804dfb9b2",
          }),
            (function (e, t) {
              if (e.__Reviseo) return
              e.__Reviseo = {}
              const i = t.createElement("script")
              i.src = "https://www.reviseo.app/cdn/reviseo.js"
              const n = t.getElementsByTagName("script")[0]
              n.parentNode.insertBefore(i, n)
            })(window, document))
        }}
      />
      //{" "}
      <div className="flex min-h-svh p-6">
        //{" "}
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          //{" "}
          <div>
            // <h1 className="font-medium">Project ready!</h1>
            // <p>You may now add components and start building.</p>
            // <p>We&apos;ve already added the button component for you.</p>
            // <Button className="mt-2">Button</Button>
            //{" "}
          </div>
          //{" "}
          <div className="font-mono text-xs text-muted-foreground">
            // (Press <kbd>d</kbd> to toggle dark mode) //{" "}
          </div>
          //{" "}
        </div>
        //{" "}
      </div>
    </>
  )
}
