import logo from './logo.svg';
import './App.css';
import StudentTable from "./components/StudentTable";

const students = [
  {id: 1, name: "Nguyen Hoang Long", age: 23, address: "123/1 Nguyen Oanh, Go Vap, HCM"},
  {id: 2, name: "Nguyen Van Long", age: 25, address: "1/1 Pham Ngu Lao, Go Vap, HCM"},
  {id: 3, name: "Nguyen Tran Long", age: 27, address: "2/1 Nguyen Van A, Go Vap, HCM"},
]

function App() {
  return (
    <StudentTable students={students}></StudentTable>
  );
}

export default App;
