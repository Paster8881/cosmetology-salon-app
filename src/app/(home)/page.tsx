// import Contact from "../components/Contact";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Brand from "../components/sections/Brand";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/sections/Fotter";
import Info from "../components/sections/Info";
import GiftCards from "../components/sections/GiftCards";
import { getCategories } from "../lib/actions/categories"
export  default async function Home() {
  const categories = await getCategories();
  return (
    <>
    <main>
      <Hero categories={categories}></Hero>
      <Info></Info>
      <Services ></Services>
      {/* <Contact></Contact> */}
      <GiftCards></GiftCards>
      <Brand></Brand>
      <FAQ></FAQ>
      <Footer></Footer>
    </main>
      
      
    </>
  )
}