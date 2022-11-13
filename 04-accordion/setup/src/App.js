import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <section className="container">
        <h3 className="title">questions and answers about login</h3>
        <div className="questions-container">
          {data.map((question) => {
            return <SingleQuestion question={question} key={question.id} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
