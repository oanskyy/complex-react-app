import React, { useEffect } from "react"
import Container from "./Container"

function Page(props) {
  // this changes the title of the document and scroll to the top of the window when clicking a new page. DOM based syntax
  useEffect(() => {
    // make it dynamic, instead of the title being hard coded
    document.title = `${props.title} | ReactApp`
    window.scrollTo(0, 0)
  }, [props.title])

  return <Container wide={props.wide}>{props.children}</Container>
}

export default Page
