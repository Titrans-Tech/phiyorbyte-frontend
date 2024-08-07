import { Inter } from "next/font/google";
import { CustomLayout } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Women() {
  return (
    <main>
      <CustomLayout>
        <main>Women</main>
      </CustomLayout>
    </main>
  );
}
