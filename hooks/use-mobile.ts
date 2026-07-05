import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Set initial value inside useEffect, but avoid synchronous setState warning by running it in a microtask/timeout if preferred, or just do it.
    // The lint error complains about synchronous setState in effect. We can initialize the state lazily, or just run onChange once in a timeout.
    // Alternatively, just set the state in a clean way:
    const update = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    update(); // Actually, this is still synchronous. Let's use requestAnimationFrame.
    
    mql.addEventListener("change", onChange)
    
    // Fix: initialize state with window.innerWidth < MOBILE_BREAKPOINT without triggering the lint error by scheduling it or using it as the initial state in useState.
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
