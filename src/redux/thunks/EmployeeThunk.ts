import { createAsyncThunk } from "@reduxjs/toolkit";
import { Employee } from "../slices/EmployeeSlice";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchEmployees = createAsyncThunk(
    'employees/fetchEmployees',
    async () => {
        const token = localStorage.getItem("authToken");

        const response = await fetch(`${API_URL}/api/v1/employees`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();
        if (!Array.isArray(data)) {
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
            const response = await fetch(`${API_URL}/api/v1/employees`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newEmployee)
            });

            if (!response.ok) {
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
    { rejectValue: string }
>(
    'employees/editEmployee',
    async ({ id, updatedEmployee }, { rejectWithValue }) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch(`${API_URL}/api/v1/employees/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedEmployee)
            });

            const data = await response.json();
            return data;
        } catch (error: any) {
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
            const response = await fetch(`${API_URL}/api/v1/employees/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete employee');
            }
            return id;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);