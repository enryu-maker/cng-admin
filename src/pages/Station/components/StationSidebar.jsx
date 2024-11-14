import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaTachometerAlt, FaBox, FaSyncAlt, FaChartPie, FaCalendarAlt, FaFileAlt } from 'react-icons/fa'; // Import icons from R
import { GrUserWorker } from "react-icons/gr";
import { RxUpdate, RxDashboard } from "react-icons/rx";
import { CiFileOn } from "react-icons/ci";
export default function StationSidebar({
    setPath
}) {
    return (
        <Sidebar
            backgroundColor='#fff'
            collapsedWidth='0px'
            collapsed={false}
            className='h-screen font-Poppins bg-primary '
            menuItemStyles={{
                button: {
                    [`&.active`]: {
                        backgroundColor: '#13395e',
                        color: '#b6c8d9',
                    },
                },
            }}>
            <Menu
                className=' space-y-5'>
                <h1 className=' text-center mt-5 text-green-500 text-3xl font-semibold  font-Poppins'>QuickFill</h1>
                {/* Dashboard Section */}
                <MenuItem
                    onClick={() => {
                        setPath("dashboard")
                    }}
                    className=' mt-10' icon={<RxDashboard />}> Dashboard </MenuItem>

                {/* Orders Section */}
                <SubMenu label="Orders" icon={<CiFileOn />}>
                    <MenuItem
                        onClick={() => {
                            setPath("order")
                        }}
                    > View Orders </MenuItem>
                </SubMenu>

                {/* Update Section */}
                <SubMenu label="Update" icon={<RxUpdate />}>
                    <MenuItem
                        onClick={() => {
                            setPath("fuel")
                        }}
                    > Fuel Available </MenuItem>
                    <MenuItem
                        onClick={() => {
                            setPath("station")
                        }}
                    > Is CNG Station Active </MenuItem>
                    <MenuItem
                        onClick={() => {
                            setPath("price")
                        }}
                    > Update Pricing </MenuItem>
                </SubMenu>
                <MenuItem
                    onClick={() => {
                        setPath("worker")
                    }}
                    icon={<GrUserWorker />}
                > Worker </MenuItem>
            </Menu>
        </Sidebar>
    );
}
