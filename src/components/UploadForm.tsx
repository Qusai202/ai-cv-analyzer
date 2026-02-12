import { useState } from "react";

interface Props {
  onAnalyze: (file: File, jd: string) => void;
  loading: boolean;
}

export default function UploadForm({ onAnalyze, loading }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [jd, setJd] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-6">🤖 AI CV Analyzer</h1>

      <label className="block mb-2 font-medium">Upload CV (PDF)</label>
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="w-full border rounded-xl p-3 mb-4"
      />

      <label className="block mb-2 font-medium">
        Job Description (optional)
      </label>
      <textarea
        value={jd}
        onChange={(e) => setJd(e.target.value)}
        className="w-full h-32 border rounded-xl p-3"
      />

      <button
        disabled={!file || loading}
        onClick={() => file && onAnalyze(file, jd)}
        className={`mt-6 w-full py-3 rounded-xl text-white font-semibold
          bg-gradient-to-r from-indigo-600 to-blue-600
          ${loading || !file ? "opacity-50" : "hover:scale-[1.01]"}
        `}
      >
        {loading ? "Analyzing..." : "Analyze CV 🚀"}
      </button>
    </div>
  );
}
