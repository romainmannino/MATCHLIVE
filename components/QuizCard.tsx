interface Question {
  question: string;
  options: string[];
}

export default function QuizCard({ q, onAnswer }: { q: Question; onAnswer: (i: number) => void }) {
  return (
    <div className="space-y-4 border p-4 rounded shadow">
      <p className="font-semibold">{q.question}</p>
      {q.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => onAnswer(i)}
          className="block w-full border p-2 hover:bg-gray-100"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
