import { Inter } from "next/font/google";
import { CustomLayout } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function MenComponent() {
  return (
    <main>
      <CustomLayout>
        <main>Men</main>
      </CustomLayout>
    </main>
  );
}
