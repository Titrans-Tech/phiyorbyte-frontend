import { Inter } from "next/font/google";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function Women() {
  return (
    <main>
      <CustomLayout>
        <main>
          <CustomWrapper>Women</CustomWrapper>
        </main>
      </CustomLayout>
    </main>
  );
}
