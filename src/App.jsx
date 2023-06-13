import { useState } from "react";
import questions_data from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(questions_data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};
export default App;
