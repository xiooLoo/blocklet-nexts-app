
import React, { useState, useEffect } from 'react';
import { MiMenu, MiMenuItem, MiButton } from "@/components";
import { Avatar, Divider } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

interface Item {
    key: string | number;
    name: string;
}

const menuItems: Item[] = [
    { key: '000', name: 'Profile' },
    { key: '001', name: 'two' },
    { key: '002', name: 'three' },
    { key: '003', name: 'four' },
]

const ProfileHeader = () => {

    return (
        <div className="flex flex-row justify-between items-center px-4">
            <div className="flex flex-row justify-start items-center">
                { menuItems.map((item: Item) => {
                    return (
                        <div className={`px-12 py-4 ${ item.key === '000' ? 'border-b-4 border-indigo-500 cursor-pointer' : null }`}>
                            <span>{ item.name }</span>
                        </div>
                    );
                }) }
            </div>
            <div className="flex flex-row justify-end items-center">
                <span className="pr-6">Hi,Jinpeng</span>
                <Avatar alt="Jinpeng" src="https://pic.imgdb.cn/item/66a8e5cbd9c307b7e9386ce1.png" />
            </div>
        </div>
    );
};

export default ProfileHeader;