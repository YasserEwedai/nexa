import Services from "@/app/components/Services";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function page() {
  return (
    <main className="bg-[#070A12] text-white max-w-6xl mx-auto md:px-10 lg:px-16">
      <Services showAll={true} showButton={false} />
      <LanguageSwitcher />
    </main>
  );
}
