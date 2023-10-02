'use client'

import { useState } from 'react';
import { Maven_Pro } from 'next/font/google'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Ant Design components
import { Layout, Menu, Button, Drawer } from 'antd';

// Icons from React-icons
import { PiShoppingCart, PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { LuLayoutDashboard, LuUser2, LuAlignRight, LuSettings2, LuShapes } from "react-icons/lu";

// Maven Pro Font from Google Fonts
const logoFont = Maven_Pro({ subsets: ['latin'], weight: "400" });

// Ant Design Layout Sub-Components
const { Header, Sider, Content } = Layout;

export default function DashLayout({children}) {
  const pathName = usePathname();

  // the collapsed/uncollapsed state of the sidebar menu
  const [collapsed, setCollapsed] = useState(false);
  
  // the opened/closed state of the menu in Top Navigation -- shown in mobile only
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  const showDrawer = () => {
    setisDrawerOpen(true);
  };

  const closeDrawer = () => {
    setisDrawerOpen(false);
  };

  // Menu item for the Top Navigation in Header
  const menuItem = [
    {
      key: 'home',
      label: <Link href="/" className={pathName == '/' ? 'active-link' : ''}>Home</Link>
    },
    {
      key: 'about',
      label: <Link href="/about" className={pathName == '/about' ? 'active-link' : ''}>About</Link>
    },
    {
      key: 'contact',
      label: <Link href="/contact" className={pathName == '/contact' ? 'active-link' : ''}>Contact</Link>
    }
  ];

  return (
    <Layout>
      <Header className='bg-[#97a5a7] flex flex-row justify-between md:justify-start px-2 md:pr-4 md:gap-20'>

        <div className='flex flex-row justify-center items-center gap-2 md:gap-6'>

          {/* Sidebar collapse Trigger Button */}
          <Button
            type="text"
            className='text-[#49585a]'
            icon={collapsed ? <LuAlignRight /> : <LuAlignRight />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '20px',
            }}
          />

          {/* Brand Logo */}
          <h3 className={`text-[1.7rem] leading-normal text-[#304649] ${logoFont.className}`}>Next/\nt</h3>

        </div>

        {/* Top Navigation Menu -- in larger devices */}
        <Menu
        disabledOverflow
        overflowedIndicator = { <PiDotsThreeOutlineVerticalLight /> }
        className = 'bg-transparent top-nav hide-mobile'
        mode = "horizontal"
        items = { menuItem }
        />

        <div className='flex flex-row items-center gap-2 ml-auto'>
          
          {/* User Info and Action button */}
          {/* TODO: use a dropdown to display a menu containing Logout Button and link to Profile page */}
          <Button shape='round' className='flex flex-row items-center justify-center gap-2 py-5 text-[#405357] border-[#6a7b7e]'>
            <LuUser2 />
            <h4 className='hide-mobile'>Asim Ridan</h4>
          </Button>

          <div className='hide-large'>

            {/* Button to open the drawer contaning Main menu in mobile devices */}
            <Button type="text" onClick={showDrawer} className='px-2 text-[1.5rem] text-[#49585a] block py-1'>
              <PiDotsThreeOutlineVerticalLight />
            </Button>

            <Drawer title="Main Menu" placement="right" width='75vw' onClose={closeDrawer} open={isDrawerOpen}>

              {/* Top Navigation Menu -- in mobile devices */}
              <Menu
                disabledOverflow
                overflowedIndicator = { <PiDotsThreeOutlineVerticalLight /> }
                className = 'bg-transparent top-nav'
                mode = "vertical"
                items = { menuItem }
              />
            </Drawer>
          </div>
        </div>


      </Header>
      
      <Layout hasSider className=' items-start'>
        
        <Sider trigger={null} collapsible collapsed={collapsed} breakpoint='lg'
        style={{minHeight: '100vh', overflow: 'auto', position: 'sticky', top: 0}} 
        width='16rem' collapsedWidth='5rem' className={`py-2 relative ${collapsed ? 'px-2' : 'px-4 md:px-6'}`}>

          {/* Sidebar Menu */}
          <Menu
            className='sidebar-menu bg-transparent'
            mode="inline"
            items={[
              {
                key: '1',
                icon: <LuLayoutDashboard />,
                label: <Link href="/dashboard" className={pathName == '/dashboard' ? 'active-side-link' : ''}>Dashboard</Link>
              },
              {
                key: '2',
                icon: <PiShoppingCart />,
                label: <Link href="/dashboard/products" className={pathName == 'dashboard/products' ? 'active-side-link' : ''}>Products</Link>

              },
              {
                key: '3',
                icon: <LuShapes />,
                label: <Link href="/dashboard/categories" className={pathName == '/dashboard/categories' ? 'active-side-link' : ''}>categories</Link>
              },
              { type: 'divider' },
              {
                key: '4',
                icon: <LuUser2 />,
                label: <Link href="/dashboard/profile" className={pathName == '/dashboard/profile' ? 'active-side-link' : ''}>Profile</Link>
              },
              {
                key: '5',
                icon: <LuSettings2 />,
                label: <Link href="/dashboard/settings" className={pathName == '/dashboard/settings' ? 'active-side-link' : ''}>Settings</Link>
              },
            ]}
          />

          {/* Footer text */}
          <p className={`text-xs absolute bottom-0 left-0 p-4 text-center w-full ${collapsed? 'hidden' : ''}`}>
          (c) NextAnt 2023
          </p>
        </Sider>

        <Content className="py-4 px-6">
          {children}
        </Content>
      </Layout>

    </Layout>
  );
}