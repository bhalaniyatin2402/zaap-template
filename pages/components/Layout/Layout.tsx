import { ReactNode } from "react"

interface LayoutType {
  children: ReactNode
}

export default function Layout({ children }: LayoutType) {
  return (
    <div className="w-[100%] max-w-[1296px] mx-auto">
      {children}
    </div>
  )
} 
