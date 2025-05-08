import React from "react";
import { Menu, MenuItem } from "./DropdownMenuStyled";



interface DropdownMenuProps {
    onCreate: () => void;
    onEdit: () => void;
    onDetails: () => void;
    onDelete: () => void;
  }

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ onCreate, onEdit, onDetails, onDelete}) => (
    <Menu>
        <MenuItem onClick={onCreate}>Create</MenuItem>
        <MenuItem onClick={onEdit}>Edit</MenuItem>
        <MenuItem onClick={onDetails}>Details</MenuItem>
        <MenuItem onClick={onDelete}>Delete</MenuItem>
    </Menu>
);