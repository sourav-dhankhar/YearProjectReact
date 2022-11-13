import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const expense = [
  { id: 'id_1', title: 'Car Insurance', amount: 294.7, date: '2022-04-10' },
  { id: 'id_2', title: 'Bike Insurance', amount: 300, date: '2022-04-10' },
  { id: 'id_3', title: 'Truck Insurance', amount: 5000, date: '2022-04-10' },
  { id: 'id_4', title: 'Tractor Insurance', amount: 7000, date: '2021-04-10' },
  { id: 'id_5', title: 'Bus Insurance', amount: 900, date: '2017-04-10' },
]
function App() {
  const [expenses, setExpenses] = useState(expense);



  const getExpenseForm = (formData) => {
    console.log('formData ', formData);
    setExpenses((prevState) => {
        return [...prevState , formData];
    });
  }

  return (
    <React.Fragment>
      <NewExpenses getExpenseForm = {getExpenseForm}/>
      <Expenses expenses={expenses} />
    </React.Fragment>
  );
}

export default App;
