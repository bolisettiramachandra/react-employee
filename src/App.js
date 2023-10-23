import "./App.css";
import Employee from "./components/Employee";
import react, { useState } from "react";
import AddEmployee from "./components/AddEmployee";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev");
  const [employee, setEmployee] = useState([
    {
      id: 1,
      name: "Ram",
      role: "CEO",
      img: "https://images.pexels.com/photos/17986565/pexels-photo-17986565/free-photo-of-man-sitting-on-a-chair-on-a-beach-playing-his-guitar.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      name: "Kiran",
      role: "Manager",
      img: "https://images.pexels.com/photos/17986565/pexels-photo-17986565/free-photo-of-man-sitting-on-a-chair-on-a-beach-playing-his-guitar.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "Sai",
      role: "Dev",
      img: "https://images.pexels.com/photos/17986565/pexels-photo-17986565/free-photo-of-man-sitting-on-a-chair-on-a-beach-playing-his-guitar.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 4,
      name: "nav",
      role: "Dev",
      img: "https://images.pexels.com/photos/17986565/pexels-photo-17986565/free-photo-of-man-sitting-on-a-chair-on-a-beach-playing-his-guitar.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 5,
      name: "Anil",
      role: "Dev",
      img: "https://images.pexels.com/photos/17986565/pexels-photo-17986565/free-photo-of-man-sitting-on-a-chair-on-a-beach-playing-his-guitar.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      name: "Ajay",
      role: "Tester",
      img: "https://images.pexels.com/photos/17986565/pexels-photo-17986565/free-photo-of-man-sitting-on-a-chair-on-a-beach-playing-his-guitar.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 7,
      name: "Kiran",
      role: "UI / UX",
      img: "https://images.pexels.com/photos/17986565/pexels-photo-17986565/free-photo-of-man-sitting-on-a-chair-on-a-beach-playing-his-guitar.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 8,
      name: "Ganesh",
      role: "Youtuber",
      img: "https://images.pexels.com/photos/17986565/pexels-photo-17986565/free-photo-of-man-sitting-on-a-chair-on-a-beach-playing-his-guitar.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employee.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployee(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployee([...employee, newEmployee]);
  }

  function removeEmployee(id) {
    const newList = employee.filter((item) => item.id !== id);

    setEmployee(newList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Ram !!!!!!!!</p>
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}
        ></input>
        <div className="justify-center flex flex-wrap">
          {employee.map((emp) => {
            return (
              <Employee
                key={emp.id}
                id={emp.id}
                name={emp.name}
                role={emp.role}
                img={emp.img}
                updateEmployee={updateEmployee}
                removeEmployee={removeEmployee}
              />
            );
          })}
        </div>
        <AddEmployee newEmployee={newEmployee} />
      </header>
    </div>
  );
}

export default App;
