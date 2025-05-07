import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status } from '../../interfaces/Status';

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

export const fetchEmployees = createAsyncThunk(
    'employees/fetchEmployees',
    async () => {
        const token = localStorage.getItem("authToken");

        const response = await fetch("http://localhost:3001/api/v1/employees", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();
        if(!Array.isArray(data)) {
            throw new Error("Employees response is not an array");
        }
        return data;
    }
);

export const createEmployee = createAsyncThunk<Employee, Partial<Employee>>(
    'employees/createEmployee',
    async (newEmployee, { rejectWithValue }) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch("http://localhost:3001/api/v1/employees", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newEmployee)
            });

            if(!response.ok) {
                throw new Error("Failed to create employee");
            }

            const data = await response.json();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateEmployee = createAsyncThunk<
    Employee,
    { id: string; updatedEmployee: Partial<Employee> },
    { rejectValue: string}
>(
    'employees/editEmployee',
    async ({ id, updatedEmployee }, {rejectWithValue}) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch(`http://localhost:3001/api/v1/employees/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedEmployee)
            });

            const data = await response.json();
            return data;
        } catch(error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteEmployee = createAsyncThunk<
    string,
    string,
    { rejectValue: string }
>(
    'employees/deleteEmployee',
    async (id, { rejectWithValue }) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch(`http://localhost:3001/api/v1/employees/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if(!response.ok) {
                throw new Error('Failed to delete employee');
            }
            return id;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

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
                if(index!==-1) {
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