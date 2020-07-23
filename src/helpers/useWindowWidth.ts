import { useState, useEffect } from "react"

const getWidth = (): number | undefined => {
  if (typeof window === "undefined") {
    return undefined
  }

  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  )
}

// TODO: fix window is undefined error
export default function (): number | undefined {
  const [width, setWidth] = useState(getWidth())

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth())
    }
    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [window])

  return width
}
