import { useState } from 'react';
import Navbar from '../components/Navbar';
import QuizCard from '../components/QuizCard';

const questions = [
  {
    question: 'Qui a marqué le premier but ?',
    options: ['OL', 'PSG'],
    answer: 1,
  },
  {
    question: 'Quelle équipe a gagné la dernière confrontation ?',
    options: ['OL', 'PSG'],
    answer: 0,
  },
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleAnswer = (option: number) => {
    if (questions[index].answer === option) setScore(score + 1);
    if (index + 1 < questions.length) setIndex(index + 1);
    else setDone(true);
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-xl mx-auto">
        {!done ? (
          <QuizCard q={questions[index]} onAnswer={handleAnswer} />
        ) : (
          <div className="text-center space-y-4">
            <p className="text-xl">Quiz terminé !</p>
            <p className="font-bold">Score : {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </>
  );
}
