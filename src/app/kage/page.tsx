import { Scene } from "@/components/Scene";

export const metadata = {
  title: "Kage — Where stillness reveals the unseen",
  description: "The complete authored Kage temple experience, preserved as an interactive full-page document.",
};

export default function KagePageRoute() {
  return (
    <div className="fixed inset-0 z-[100] w-screen h-screen overflow-hidden bg-[#080808]">
      <Scene />
    </div>
  );
}
