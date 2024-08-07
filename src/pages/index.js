import { Inter } from "next/font/google";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <CustomLayout>
        <main>
          <CustomWrapper>The home page</CustomWrapper>
        </main>
      </CustomLayout>
    </main>
  );
}
