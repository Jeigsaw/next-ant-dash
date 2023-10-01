'use client'

import { useState } from 'react';

import { PiShoppingCart, PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { LuLayoutDashboard, LuUser2, LuAlignRight, LuSettings2, LuShapes } from "react-icons/lu";

import { Layout, Menu, Button, Drawer } from 'antd';
import { Maven_Pro } from 'next/font/google'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const logoFont = Maven_Pro({ subsets: ['latin'], weight: "400" });

const { Header, Sider, Content, Footer } = Layout;

export default function DashLayout({children}) {
  const pathName = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  const showDrawer = () => {
    setisDrawerOpen(true);
  };

  const closeDrawer = () => {
    setisDrawerOpen(false);
  };

  return (
    <Layout>
      <Header className='bg-[#97a5a7] flex flex-row justify-between md:justify-start px-2 md:pr-4 md:gap-20'>
        <div className='flex flex-row justify-center items-center gap-2 md:gap-6'>
          <Button
            type="text"
            className='text-[#49585a]'
            icon={collapsed ? <LuAlignRight /> : <LuAlignRight />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '20px',
            }}
          />
          <h3 className={`text-[1.7rem] leading-normal text-[#304649] ${logoFont.className}`}>Next/\nt</h3>
        </div>

        <Menu
        disabledOverflow
        overflowedIndicator = {<PiDotsThreeOutlineVerticalLight />}
        className='bg-transparent top-nav hide-mobile'
        mode="horizontal"
        items={
          [
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
          ]
        }
        />

        <div className='flex flex-row items-center gap-2 ml-auto'>
          <Button shape='round' className='flex flex-row items-center justify-center gap-2 py-5 text-[#405357] border-[#6a7b7e]'>
            <LuUser2 />
            <h4 className='hide-mobile'>Asim Ridan</h4>
          </Button>

          <div className='hide-large'>
            <Button type="text" onClick={showDrawer} className='px-2 text-[1.5rem] text-[#49585a] block py-1'>
              <PiDotsThreeOutlineVerticalLight />
            </Button>
            <Drawer title="Main Menu" placement="right" width='75vw' onClose={closeDrawer} open={isDrawerOpen}>
            <Menu
              disabledOverflow
              overflowedIndicator = {<PiDotsThreeOutlineVerticalLight />}
              className='bg-transparent top-nav'
              mode="vertical"
              items={
                [
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
                ]
              }
              />
            </Drawer>
          </div>
        </div>


      </Header>
      
      <Layout hasSider>
        
        <Sider trigger={null} collapsible collapsed={collapsed} breakpoint='lg'
        style={{minHeight: '90vh', overflow: 'auto', position: 'sticky', top: 0}} 
        width='16rem' collapsedWidth='5rem' className={`py-2 relative ${collapsed ? 'px-2' : 'px-4 md:px-6'}`}>
        <Menu
          className=' bg-transparent'
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <LuLayoutDashboard />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <PiShoppingCart />,
              label: 'Products',
            },
            {
              key: '3',
              icon: <LuShapes />,
              label: 'Categories',
            },
            { type: 'divider' },
            {
              key: '4',
              icon: <LuUser2 />,
              label: 'Profile',
            },
            {
              key: '5',
              icon: <LuSettings2 />,
              label: 'Settings',
            },
          ]}
        >
          <Menu.Item key='6'><p>Go</p></Menu.Item>
        </Menu>
          <p className={`text-xs absolute bottom-0 left-0 p-4 text-center w-full ${collapsed? 'hidden' : ''}`}>
          (c) NextAnt 2023<br/> All Rights Reserved.
          </p>
        </Sider>

        <Content className="p-4">
          {children}
        </Content>
      </Layout>

    </Layout>
  );
}