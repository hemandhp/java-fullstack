import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
});

const userSlice = createSlice({
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        .addCase(fetchUsers.fulfilled, (state) => {
            state.loading = true;
        
    }     

});