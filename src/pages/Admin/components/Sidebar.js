import { Link } from 'react-router-dom';
import { useState } from 'react';

import { logos } from '../../../assets/img';
import { MdKeyboardArrowLeft, MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardArrowRight } from 'react-icons/md';

import { SidebarItems } from '../../../constants/adminSidebarItems';

function Sidebar(props) {
    const { sidebarState, forceSidebarState, OnOpenSidebar } = props;
    const [openDropdown, setOpenDropdown] = useState(-1);
    const handleOnClickDropdownBtn = (index) => {
        if (index === openDropdown) {
            setOpenDropdown(-1);
        } else {
            setOpenDropdown(index);
        }
    };
    return <div>SideBar</div>;
}

export { Sidebar as AdminSidebar };
