import { useState } from "react";

export const useAlertDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
    const onToggle = () => setIsOpen(!isOpen);
    return { onOpen, onClose, isOpen, onToggle, setIsOpen };
}