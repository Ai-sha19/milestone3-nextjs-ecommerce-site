import Features from "./components/features";
import Hero from "./components/hero";
import Menu from "./components/menu";
import Products from "./components/products";

// src/app/page.tsx
export default async function Home() {



  return (
 <>
 <Hero />
 <Features />
 <Products />
 
 {/* <Menu /> */}
 </>
  );
}
