import SectionCard from "./SectionCard";
import ScoreRing from "./ScoreRing";
import type { JobMatch } from "../types/cv";

export default function JobMatchCard({ data }: { data: JobMatch }) {
  return (
    <SectionCard title="💼 Job Match">
      <div className="flex gap-6">
        <ScoreRing score={data.matchPercentage} />
        <ul className="list-disc ml-5">
          {data.missingSkills.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>
    </SectionCard>
  );
}
