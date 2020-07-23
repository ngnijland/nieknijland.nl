import { useState, useEffect } from "react"

const getWidth = (): number | undefined => {
  if (!window) {
    return undefined
  }

  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  )
}

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
