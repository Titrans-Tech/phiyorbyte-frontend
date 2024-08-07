import { Header } from "./Header";
import { PromoHeader } from "./promoHeader";

export const CustomLayout = ({ children }) => {
  return (
    <main>
      <header className="mb-4">
        <PromoHeader />
        <Header />
      </header>
      {children}
    </main>
  );
};
