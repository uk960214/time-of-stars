import Mission from "./components/Mission/Mission";
import ANSWERS from "./constants/answers";

function App() {
  return (
    <div className="App">
      <header>
        <h1>별이 맞닿은 시간 답지</h1>
      </header>
      <main>
        {ANSWERS.map(({ title, quests }) => (
          <Mission key={title}>
            <Mission.Title>{title}</Mission.Title>
            {quests.map(({ quest, answer }) => (
              <Mission.Quest key={quest} title={quest} answer={answer} />
            ))}
          </Mission>
        ))}
      </main>
    </div>
  );
}

export default App;
