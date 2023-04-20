import React from "react";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import { DATA } from "../../static";

function Home() {
   return (
      <div>
         <Banner />
         <Products data={DATA} />
      </div>
   );
}

export default Home;
