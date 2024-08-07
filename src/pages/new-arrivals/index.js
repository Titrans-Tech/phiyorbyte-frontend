import { Inter } from "next/font/google";
import { CustomLayout } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function NewArrivals() {
  return (
    <main>
      <CustomLayout>
        <main>New Arrivals</main>
      </CustomLayout>
    </main>
  );
}
