import React from "react";
import { Menu, MenuItem } from "./DropdownMenuStyled";
import { FieldText } from "../List/ListStyled";



interface DropdownMenuProps {
    onCreate: () => void;
    onEdit: () => void;
    onDetails: () => void;
    onDelete: () => void;
    itemName: string;
  }

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ onCreate, onEdit, onDetails, onDelete, itemName}) => (
    <Menu>
        <MenuItem onClick={onCreate}>New {itemName}</MenuItem>
        <MenuItem onClick={onEdit}>Edit {itemName}</MenuItem>
        <MenuItem onClick={onDetails}>Details {itemName}</MenuItem>
        <MenuItem onClick={onDelete}>Delete {itemName}</MenuItem>
    </Menu>
);