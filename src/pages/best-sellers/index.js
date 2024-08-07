import { Inter } from "next/font/google";
import { CustomLayout } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function BestSellers() {
  return (
    <main>
      <CustomLayout>
        <main>Best sellers</main>
      </CustomLayout>
    </main>
  );
}
