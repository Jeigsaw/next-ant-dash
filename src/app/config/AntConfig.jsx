'use client'

import { ConfigProvider } from 'antd';

export default function AntConfig({children}){
  return(
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#296561',
          borderRadius: 4,
          colorText: '#222',
          fontSize: 15,
          colorBgElevated: '#e4eaea'
        },
        // components token
        components: {
          Layout:{
            siderBg: '#eee'
          },
          Menu:{
            itemHeight: 50,
            itemMarginBlock: '1rem',
            activeBarBorderWidth: 0,
            itemActiveBg: '#ccd8da',
            itemSelectedBg: '#ccd8da'
          },
          Divider:{
            verticalMarginInline: '1rem'
          },
          Button:{
            defaultShadow: 0,
            primaryShadow: 0,
            primaryColor: '#5a6769',
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  )
}
