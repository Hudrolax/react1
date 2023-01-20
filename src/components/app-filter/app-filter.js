import { Component } from 'react';

import './app-filter.css'

class AppFilter extends Component {
  render() {
    let buttons = [
      { name: '', text: 'Все сотрудники' },
      { name: 'increase', text: 'На повышение' },
      { name: '>1000', text: 'З/П больше 1000$' },
    ]

    const { filter, onChangeFilter } = this.props

    buttons = buttons.map(({ name, text }) => {
      const btnClass = `btn ${filter === name ? 'btn-light' : 'btn-outline-light'}`
      return (
        <button className={btnClass} type="button" key={name}
          onClick={() => { onChangeFilter(name) }}>
          {text}
        </button>
      )
    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}

export default AppFilter;
