import React from "react";
import { Menu, MenuItem } from "./DropdownMenuStyled";
import { FieldText } from "../List/ListStyled";



interface DropdownMenuProps {
    onEdit: () => void;
    onDetails: (() => void) | undefined;
    onDelete: () => void;
    itemName: string;
  }

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ onEdit, onDetails, onDelete, itemName}) => (
    <Menu>
        <MenuItem onClick={onEdit}>Edit {itemName}</MenuItem>
        {onDetails && (
            <MenuItem onClick={onDetails}>Details {itemName}</MenuItem>
        )}
        <MenuItem onClick={onDelete}>Delete {itemName}</MenuItem>
    </Menu>
);