import './globals.css'
import AntConfig from './config/AntConfig';
import DashLayout from '@/components/DashLayout';


export const metadata = {
  title: 'Next Ant Dash',
  description: 'A Dashboard design using Nextjs and Ant Design',
}

export default function RootLayout({ children }) {

  return (
    <AntConfig>
      <html lang="en">
        <body>

          <DashLayout>
          {children}
          </DashLayout>
          
        </body>
      </html>
    </AntConfig>
  )
}
