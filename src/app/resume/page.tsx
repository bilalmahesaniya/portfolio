import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bilal Mahesaniya — UI/UX Designer | ATS Resume",
  description:
    "Interactive, ATS-compliant resume of Bilal Mahesaniya. Certified in UI/UX Design with a Diploma in Computer Engineering.",
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
