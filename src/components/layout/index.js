import { getStoredId } from "@/utils";
import { Header } from "./Header";
import { PromoHeader } from "./promoHeader";

export const CustomLayout = ({ children }) => {
  const isLoggedIn = getStoredId("access_token");
  return (
    <main>
      <header className="m">
        {!isLoggedIn && <PromoHeader />}

        <Header />
      </header>
      <section className="">{children}</section>
    </main>
  );
};
