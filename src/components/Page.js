import { useEffect } from "react"

const Page = (props) => {
  useEffect(() => {
    document.title = `${props.title} | DoaTec` || "DoaTec"
  }, [])
  return props.children
}

export default Page
