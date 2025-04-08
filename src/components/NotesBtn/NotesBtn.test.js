import { render, screen } from '@testing-library/react';
import React from 'react';
import { NotesBtn } from "./NotesBtn.jsx";

describe("NotesBtn", () => {
    let originalFetch;

    beforeEach(() => {
        originalFetch = global.fetch;
        global.fetch = jest.fn(() =>
            Promise.resolve([
                {
                    json: () => Promise.resolve([{ value: "View Notes"}])
                }
            ])
        );
    });

    afterEach(() => {
        global.fetch = originalFetch;
    });

    it("render NotesBtn component", async () => {
        render(<NotesBtn value="View Notes"/>);
        const valueElement = await screen.findByText(/View Notes/i);
        expect(valueElement).toBeInTheDocument();
    });
});