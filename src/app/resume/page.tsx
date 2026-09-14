import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bilal Mahesaniya — UI/UX Designer | ATS Resume",
  description:
    "Interactive, ATS-compliant resume of Bilal Mahesaniya. 1 year experience in UI/UX Design at Xipra Tech with a Computer Science foundation.",
};

export default function ResumePage() {
  return (
    <main className="w-full h-screen bg-[#0B0D12]">
      <iframe
        src="/resume.html"
        title="Bilal Mahesaniya Resume"
        className="w-full h-full border-none"
      />
    </main>
  );
}
