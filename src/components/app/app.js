import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: "John1", salary: 300, increase: false, like: true, id: 1 },
        { name: "John2", salary: 4000, increase: false, like: false, id: 2 },
        { name: "John3", salary: 500, increase: true, like: false, id: 3 },
        { name: "John4", salary: 1200, increase: false, like: false, id: 4 },
      ],
      nextId: 5,
      term: '',
      filterName: ''
    }
  }

  onChangeSalary = (id, salary) => {
    this.setState(({ data }) => {
      return {
        data: data.map(item => {
          if (item.id === id) {
            return {...item, salary: salary}
          }
          return item
        })
      }
    })
  }

  onChangeFilter = (filterName) => {
    this.setState({ filterName })
  }

  onUpdateState = (term) => {
    this.setState({ term })
  }

  changeProp = (id, prop) => {
    this.setState(({ data }) => {
      return {
        data: data.map(item => {
          if (item.id === id) {
            return { ...item, [prop]: !item[prop] }
          }
          return item;
        })
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(elem => elem.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    this.setState(({ data, nextId }) => {
      const newItem = { name: name, salary: salary, increase: false, id: nextId }

      return {
        data: [...data, newItem],
        nextId: nextId + 1
      }
    })
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  filterData = (data, filterName) => {
    if (filterName === '') {
      return data
    } else if (filterName === 'increase') {
      return data.filter(item => item.increase)
    } else {
      return data.filter(item => item.salary > 1000)
    }

  }

  render() {
    const { data, term, filterName } = this.state
    const filteredData = this.filterData(data, filterName)
    const visibleData = this.searchEmp(filteredData, term)
    return (
      <div className="app">
        <AppInfo total={data.length}
          increase={data.filter(item => item.increase).length} />

        <div className="search-panel">
          <SearchPanel onUpdateState={this.onUpdateState} />
          <AppFilter onChangeFilter={this.onChangeFilter} filter={filterName} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onChangeProp={this.changeProp}
          onChangeSalary={this.onChangeSalary}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
