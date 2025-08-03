import { ChevronLeft } from 'lucide-react'

interface HeaderProps {
  title: string
  description?: string
  icon?: string
  showBackButton?: boolean
  onBack?: () => void
}

const Header = ({ 
  title, 
  description, 
  icon, 
  showBackButton = false, 
  onBack 
}: HeaderProps) => {
  return (
    <div className="text-center mb-8 relative">
      {showBackButton && onBack && (
        <button
          onClick={onBack}
          className="absolute left-0 top-0 flex items-center text-[#5c5b57] hover:text-[#1a1a1a] transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> Back
        </button>
      )}

      {icon && <div className="text-6xl mb-4">{icon}</div>}
      <h1 className="text-3xl font-bold text-[#3e3e3e] mb-2">{title}</h1>
      {description && <h2 className="text-lg text-[#7b5e48]">{description}</h2>}
    </div>
  )
}

export default Header