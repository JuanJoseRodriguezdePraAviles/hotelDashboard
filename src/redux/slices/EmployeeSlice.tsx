import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status } from '../../interfaces/Status';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export interface Employee {
    id: string,
    name: string,
    email?: string,
    job_functions?: string,
    registration_date: Date,
    phone?: string,
    schelude?: string,
    status?: boolean
}

interface EmployeesState {
    employees: Employee[],
    status: Status,
    error: string | undefined
}

const initialState: EmployeesState = {
    employees: [],
    status: Status.Loading,
    error: ""
}

export const fetchEmployees = createAsyncThunk<Employee[]>(
    'employees/fetchEmployees',
    async () => {
        await delay(200);
        const response = await fetch("../../public/Employees.json");
        const data = await response.json();
        return data;
    }
);

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload)
        },
        editEmployee: (state, action) => {
            const { id, updateEmployee } = action.payload;
            const index = state.employees.findIndex((employee) => employee.id === id);
            
            if (index !== -1) {
                state.employees[index] = { ...state.employees[index], ...updateEmployee };
            }
        },
        deleteEmployee: (state, action) => {
            const { id } = action.payload;
            state.employees = state.employees.filter((employee) => employee.id !== id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.status = Status.Loading;
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.status = Status.Suceeded;
                state.employees = action.payload;
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.error.message;
            });
    }
});

export const { addEmployee, editEmployee, deleteEmployee } = employeesSlice.actions;
export const { actions, reducer } = employeesSlice;
export default reducer;