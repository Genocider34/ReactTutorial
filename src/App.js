import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Toilet Paper", amount: 94.12, date: new Date(2020, 8, 13) },
    { title: "New TV", amount: 799.49, date: new Date(2021, 3, 11) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 26) },
    { title: "New Desk", amount: 450, date: new Date(2021, 6, 11) },
  ];

  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </>
  );
}

export default App;