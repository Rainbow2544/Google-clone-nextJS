import SearchHeader from '@/components/SearchHeader'
import '../globals.css'

export default function RootLayout({ children }) {
  return (
    <div >
      <SearchHeader/>
      {children}
    </div>
  )
}
