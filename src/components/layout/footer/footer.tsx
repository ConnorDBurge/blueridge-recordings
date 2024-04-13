import { getAdmin } from "@/lib/shopify";
import Banner from "./banner";

export async function Footer() {
  const admin = await getAdmin();
  return (
    <>
      <Banner />
      <div className="from-lavender flex-1 bg-gradient-to-b">
        <div className="container pb-16 pt-8">Footer</div>
      </div>
    </>
  );
}
