import { Btn, BtnText } from "./NotesBtnStyled";

export const NotesBtn = ({ value }) => {
    return (
        <Btn>
            <BtnText>
                {value}
            </BtnText>
        </Btn>
    );
}