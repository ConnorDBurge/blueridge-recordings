import { getAdmin, getFooter } from "@/lib/shopify";
import Banner from "./banner";

export async function Footer() {
  const { billingAddress } = await getAdmin();
  const { banner, admin, hours } = await getFooter();
  console.log({ banner, admin, hours });
  return (
    <>
      <Banner phone={billingAddress?.phone} />
      <div className="from-lavender flex-1 bg-gradient-to-b">
        <div className="container pb-16 pt-8">Footer</div>
      </div>
    </>
  );
}
