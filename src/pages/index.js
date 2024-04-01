import { Layout } from "@/components/layout/layout";
import { ShowLatest } from "@/components/sections/Home/showLatest";
import { Tending } from "@/components/sections/Home/Tending";
import { Recommend } from "@/components/sections/Home/Recommend";
import { Categories } from "@/components/sections/Home/Categories";



export default function Home() {
  return (
      <Layout >
        <ShowLatest />
        <Tending />
        <Recommend />
        <Categories />
      </Layout>
  );
}
