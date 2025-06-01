// interfaces/index.ts

// Interface for property address
export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

// Interface for property amenities/offers
export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

// Main property interface
export interface PropertyProps {
  name: string;
  address: AddressProps;
  rating: number;
  category: string[];
  price: number;
  offers: OffersProps;
  image: string;
  discount: string;
}

// Interface for filter props
export interface FilterProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

// Interface for property card props
export interface PropertyCardProps {
  property: PropertyProps;
}

// Interface for layout props
export interface LayoutProps {
  children: React.ReactNode;
}

// Interface for header props (if needed for state management)
export interface HeaderProps {
  isScrolled?: boolean;
  onSearch?: (searchTerm: string) => void;
}

// Interface for footer props (if needed for customization)
export interface FooterProps {
  showSocialLinks?: boolean;
}

// Interface for search props
export interface SearchProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

// Interface for pill/tag component
export interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

// Interface for hero section props
export interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

// Interface for property listing section props
export interface ListingSectionProps {
  properties: PropertyProps[];
  selectedFilter?: string;
}

// Interface for rating display component
export interface RatingProps {
  value: number;
  maxValue?: number;
}

// Interface for price display component
export interface PriceProps {
  amount: number;
  currency?: string;
  period?: string;
}

// Interface for discount badge component
export interface DiscountBadgeProps {
  value: string;
}

// Interface for property features component
export interface FeaturesProps {
  features: string[];
}