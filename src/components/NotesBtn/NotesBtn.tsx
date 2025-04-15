import { Btn, BtnText } from "./NotesBtnStyled";
import React from "react";

interface NotesBtnProps {
    value: string;
}

export const NotesBtn: React.FC<NotesBtnProps> = ({ value }) => {
    return (
        <Btn>
            <BtnText>
                {value}
            </BtnText>
        </Btn>
    );
}