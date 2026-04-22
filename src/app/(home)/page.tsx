// import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Brand from "../components/Brand";
import FAQ from "../components/FAQ";
import Footer from "../components/Fotter";
import Info from "../components/Info";
import GiftCards from "../components/GiftCards";

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