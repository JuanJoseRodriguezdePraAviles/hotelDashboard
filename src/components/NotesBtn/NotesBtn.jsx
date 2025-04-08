import { Btn, BtnText } from "./NotesBtnStyled";
import React from "react";

export const NotesBtn = ({ value }) => {
    return (
        <Btn>
            <BtnText>
                {value}
            </BtnText>
        </Btn>
    );
}