// import Contact from "../components/Contact";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Brand from "../components/sections/Brand";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/sections/Fotter";
import Info from "../components/sections/Info";
import GiftCards from "../components/sections/GiftCards";

export default function Home() {
  return (
    <>
    <main>
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      {/* <Contact></Contact> */}
      <GiftCards></GiftCards>
      <Brand></Brand>
      <FAQ></FAQ>
      <Footer></Footer>
    </main>
      
      
    </>
  )
}