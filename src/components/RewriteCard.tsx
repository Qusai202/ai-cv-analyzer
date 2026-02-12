import SectionCard from "./SectionCard";
import type { RewriteResult } from "../types/cv";

export default function RewriteCard({ data }: { data: RewriteResult }) {
  return (
    <SectionCard title="✍️ AI Rewritten CV">
      <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-4 rounded-xl">
        {data.text}
      </pre>
    </SectionCard>
  );
}
