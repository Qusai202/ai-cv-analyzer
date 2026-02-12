import { useState } from "react";
import UploadForm from "../components/UploadForm";
import CVAnalysisCard from "../components/CVAnalysisCard";
import ATSScoreCard from "../components/AtsScoreCard";
import JobMatchCard from "../components/JobMatchCard";
import RewriteCard from "../components/RewriteCard";

import {
  analyzeCV,
  atsScore,
  jobMatch,
  rewriteCV,
} from "../api/cvApi";

import type { CVAnalysis, ATSScore, JobMatch, RewriteResult } from "../types/cv";

export default function UploadPage() {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<CVAnalysis | null>(null);
  const [ats, setAts] = useState<ATSScore | null>(null);
  const [match, setMatch] = useState<JobMatch | null>(null);
  const [rewrite, setRewrite] = useState<RewriteResult | null>(null);

  const handleAnalyze = async (file: File, jd: string) => {
    setLoading(true);
    try {
      setAnalysis(await analyzeCV(file));
      setAts(await atsScore(file));
      if (jd) setMatch(await jobMatch(file, jd));
      setRewrite(await rewriteCV(file));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <UploadForm onAnalyze={handleAnalyze} loading={loading} />

        {analysis && <CVAnalysisCard data={analysis} />}
        {ats && <ATSScoreCard data={ats} />}
        {match && <JobMatchCard data={match} />}
        {rewrite && <RewriteCard data={rewrite} />}
      </div>
    </div>
  );
}
