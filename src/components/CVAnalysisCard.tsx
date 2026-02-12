import SectionCard from "./SectionCard";
import ScoreRing from "./ScoreRing";
import type { CVAnalysis } from "../types/cv";

export default function CVAnalysisCard({ data }: { data: CVAnalysis }) {
  return (
    <SectionCard title="📄 CV Analysis">
      <div className="flex gap-6">
        <ScoreRing score={data.score} />
        <div>
          <p className="font-semibold">Strengths</p>
          <ul className="list-disc ml-5">
            {data.strengths.map((s, i) => <li key={i}>{s}</li>)}
          </ul>

          <p className="font-semibold mt-3">Weaknesses</p>
          <ul className="list-disc ml-5">
            {data.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
          </ul>
        </div>
      </div>
    </SectionCard>
  );
}
