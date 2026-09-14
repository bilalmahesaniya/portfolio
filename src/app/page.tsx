import { Scene } from "@/components/Scene";

export const metadata = {
  title: "Bilal Mahesaniya — UI/UX Designer • 3D Portfolio",
  description:
    "Interactive 3D Portfolio of Bilal Mahesaniya — Junior UI/UX Designer with a Computer Science foundation and 1 year experience at Xipra Tech. Explore 15 interactive Figma prototypes.",
};

export default function HomePage() {
  return (
    <main className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#080808]">
      <Scene />
    </main>
  );
}
