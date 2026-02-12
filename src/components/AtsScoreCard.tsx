import SectionCard from "./SectionCard";
import ScoreRing from "./ScoreRing";
import type { ATSScore } from "../types/cv";

export default function ATSScoreCard({ data }: { data: ATSScore }) {
  return (
    <SectionCard title="📊 ATS Compatibility">
      <div className="flex gap-6">
        <ScoreRing score={data.atsScore} />
        <ul className="list-disc ml-5">
          {data.missingKeywords.map((k, i) => <li key={i}>{k}</li>)}
        </ul>
      </div>
    </SectionCard>
  );
}
