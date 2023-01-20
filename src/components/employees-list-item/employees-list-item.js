import "./employees-list-item.css";

const EmployeesListItem = (props) => {
    const { name, salary, increase, like, onDelete, onChangeProp, onChangeSalary } = props;
    let classNmaes = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNmaes += " increase";
    }
    if (like) {
        classNmaes += " like";
    }
    return (
        <li className={classNmaes}>
            <span className="list-group-item-label" data-prop="like" onClick={onChangeProp}>
                {name}
            </span>
            <input
                type="text"
                className="list-group-item-input"
                defaultValue={salary + "$"}
                onChange={onChangeSalary}
            />
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-cookie btn-sm "
                    data-prop="increase"
                    onClick={onChangeProp}
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;
