// Polyfill for annoying vh in iOS behaviour
export default function (percentage: number): string {
  const vh = window.innerHeight * 0.01
  return `${percentage * vh}px`
}
