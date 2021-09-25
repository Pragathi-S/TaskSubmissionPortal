import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Tasks",
        path: '/tasks',
        icon: <FaIcons.FaTasks />,
        cName: 'nav-text'
    }
];