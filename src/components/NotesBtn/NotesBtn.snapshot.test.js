import React from "react";
import { render, screen } from "@testing-library/react";
import NotesBtn from "./NotesBtn";

test("renders View Notes button", async () => {
    render(<NotesBtn value="View Notes"/>);
    const button = await screen.findByText(/View Notes/i);
    expect(button).toBeInTheDocument();
});