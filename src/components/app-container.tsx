import { Body } from "../layouts/body"
import { Footer } from "../layouts/footer"
import { Header } from "../layouts/header"

export const AppContainer = () => {
  return(
    <>
      {/* header */}
      <Header />
      {/* body */}
      <Body />
      {/* footer */}
      <Footer />
    </>
  )
}