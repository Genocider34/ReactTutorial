import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "Toilet Paper", amount: 94.12, date: new Date(2020, 8, 13) },
    { title: "New TV", amount: 799.49, date: new Date(2021, 3, 11) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 26) },
    { title: "New Desk", amount: 450, date: new Date(2021, 6, 11) },
  ];

  return (
    <>
      <Expenses items={expenses} />
    </>
  );
}

export default App;
