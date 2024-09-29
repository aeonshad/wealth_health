import { v4 as uuidv4 } from 'uuid';
import store from '../app/store';
import { employees } from '../data/employees';
class EmployeeService {
    static add(formData) {
        const formDataWithId = {
            id: uuidv4(),
            ...formData,
        };
        store.dispatch({ type: 'employee/addEmployee', payload: formDataWithId });
    }
    static delete(idEmployee) {
        store.dispatch({ type: 'employee/removeEmployee', payload: idEmployee });
    }
    static reset() {
        store.dispatch({ type: 'employee/resetEmployees', payload: employees });
    }
}

export default EmployeeService;
