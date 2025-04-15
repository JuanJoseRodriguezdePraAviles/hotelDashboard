import { render, screen } from '@testing-library/react';
import React from 'react';
import { NotesBtn } from "./NotesBtn.js";

describe("NotesBtn", () => {
    it("render NotesBtn component", async () => {
        render(<NotesBtn value="View Notes"/>);
        const valueElement = await screen.findByText(/View Notes/i);
        expect(valueElement).toHaveProperty('textContent', 'View Notes');
    });
});