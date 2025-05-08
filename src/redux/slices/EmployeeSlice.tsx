import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status } from '../../interfaces/Status';
import { createEmployee, deleteEmployee, fetchEmployees, updateEmployee } from '../thunks/EmployeeThunk';

export interface Employee {
    _id?: string,
    name: string,
    email: string,
    password: string,
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

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {

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
            })
            .addCase(createEmployee.fulfilled, (state, action) => {
                state.employees.push(action.payload);
            })
            .addCase(createEmployee.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.error.message;
            })
            .addCase(updateEmployee.fulfilled, (state, action) => {
                const index = state.employees.findIndex(b => b._id === action.payload._id);
                if (index !== -1) {
                    state.employees[index] = action.payload;
                }
            })
            .addCase(updateEmployee.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.payload;
            })
            .addCase(deleteEmployee.fulfilled, (state, action) => {
                state.employees = state.employees.filter(employee => employee._id !== action.payload);
            })
            .addCase(deleteEmployee.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.payload;
            });
    }
});

export const { actions, reducer } = employeesSlice;
export default reducer;