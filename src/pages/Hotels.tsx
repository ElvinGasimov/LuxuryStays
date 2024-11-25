import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import HotelCard, { HotelType } from '../components/HotelCard';

const HOTELS: HotelType[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    name: 'Grand Plaza Hotel',
    location: 'New York, USA',
    price: 299,
    rating: 4.8,
    amenities: ['wifi', 'pool', 'spa', 'restaurant'],
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80',
    name: 'Sunset Resort & Spa',
    location: 'Maldives',
    price: 499,
    rating: 4.9,
    amenities: ['wifi', 'pool', 'beach', 'spa'],
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80',
    name: 'Mountain View Lodge',
    location: 'Switzerland',
    price: 399,
    rating: 4.7,
    amenities: ['wifi', 'restaurant', 'ski'],
  }
];

// https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80

const Hotels = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredHotels = HOTELS.filter((hotel) => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="pt-20">
      <PageHeader
        title="Our Hotels"
        description="Find your perfect stay from our collection of luxury hotels"
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80"
      />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Search hotels by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>

            {showFilters && (
              <div className="mt-4 p-4 bg-white rounded-md shadow-md">
                <h3 className="text-lg font-medium mb-4">Price Range</h3>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <span className="text-gray-600">
                    Up to ${priceRange[1]}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;