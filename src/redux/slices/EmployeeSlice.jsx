import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchEmployees = createAsyncThunk(
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
    initialState: {
        employees: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload)
        },
        editEmployee: (state, action) => {
            const { id, updateEmployee } = action.payload;
            const index = state.employees.findIndex((employee) => employee.employee_id === Number(id));
            
            if (index !== -1) {
                state.employees[index] = { ...state.employees[index], ...updateEmployee };
            }
        },
        deleteEmployee: (state, action) => {
            const { id } = action.payload;
            state.employees = state.employees.filter((employee) => employee.employee_id !== Number(id));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.employees = action.payload;
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { addEmployee, editEmployee, deleteEmployee } = employeesSlice.actions;
export const { actions, reducer } = employeesSlice;
export default reducer;