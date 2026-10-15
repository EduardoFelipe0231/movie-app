import { useEffect } from "react"

export const tabTitle = (newTitle) => {
   useEffect(() => {
        document.title = `MovieApp | ${newTitle}`
   }, [])
}