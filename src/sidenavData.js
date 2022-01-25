import React from 'react';
// import { FiAlignJustify } from "react-icons/fi";
// import { CgCloseO } from "react-icons/cg";
import * as CgIcons from "react-icons/cg"
// import * as IoIcons from "react-icons/io"
import * as MdIcons from "react-icons/md"
// import * as FaIcons from "react-icons/fa"

export const sidenavData = [
    {
        title: 'Home',
        path: '/',
        icon: <CgIcons.CgHello />,
        className: 'nav-text',
    },
    {
        title: 'Add Movie',
        path: '/movies/new',
        icon: <MdIcons.MdAddBox />,
        className: 'nav-text',
    },
    {
        title: 'Movies',
        path: '/movies',
        icon: <MdIcons.MdLocalMovies />,
        className: 'nav-text',
    },
    {
        title: 'Top Movies',
        path: '/movies/top',
        icon: <MdIcons.MdLocalMovies />,
        className: 'nav-text',
    },
]