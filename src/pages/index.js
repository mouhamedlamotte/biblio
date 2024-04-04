import { Layout } from "@/components/layout/layout";
import { ShowLatest } from "@/components/sections/discover/showLatest";
import { Tending } from "@/components/sections/discover/Tending";
import { Recommend } from "@/components/sections/discover/Recommend";
import { Categories } from "@/components/sections/discover/Categories";
import Head from "next/head";



export default function Home() {
  return (
      <Layout title={"Accueil"} >      
        <ShowLatest />
        {/* <Tending /> */}
        {/* <Recommend /> */}
        <Categories />
      </Layout>
  );
}
