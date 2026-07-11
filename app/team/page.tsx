import Team from "@/app/components/Team";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Page() {
  return (
    <main className="bg-[#070A12] text-white min-h-screen max-w-6xl mx-auto md:px-10 lg:px-16">
      <Team showAll={true} showButton={false} />
      <LanguageSwitcher />
    </main>
  );
}

