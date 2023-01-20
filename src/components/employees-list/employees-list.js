import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onChangeProp, onChangeSalary }) => {
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => {
                    onDelete(id);
                }}
                onChangeProp={(e) => {
                    onChangeProp(id, e.currentTarget.getAttribute('data-prop'));
                }}
                onChangeSalary={(e) => {
                    onChangeSalary(id, +e.target.value.replace(/\D/g,''))
                }}
            />
        );
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
