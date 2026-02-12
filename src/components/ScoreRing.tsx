interface Props {
  score: number;
}

export default function ScoreRing({ score }: Props) {
  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="64"
          cy="64"
          r="56"
          stroke="#E5E7EB"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="64"
          cy="64"
          r="56"
          stroke="#2563EB"
          strokeWidth="10"
          fill="none"
          strokeDasharray={351}
          strokeDashoffset={351 - (351 * score) / 100}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-800">
        {score}%
      </div>
    </div>
  );
}
