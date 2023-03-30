import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <h3>Questions And Answers About Login</h3>
      <article>
        {data.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </article>
    </main>
  );
}

export default App;
