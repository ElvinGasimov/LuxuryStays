import React from 'react';
import { MapPin, Wifi, Coffee, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface HotelType {
  id: string;
  image: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  amenities: string[];
}

interface HotelCardProps {
  hotel: HotelType;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="relative h-64">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{hotel.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-5 w-5 mr-1" />
          {hotel.location}
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <Wifi className="h-5 w-5 mr-1" />
            </div>
            <div className="flex items-center">
              <Coffee className="h-5 w-5 mr-1" />
            </div>
          </div>
          <div className="text-blue-600 font-semibold">
            From ${hotel.price}/night
          </div>
        </div>
        <Link
          to={`/booking?hotel=${hotel.id}`}
          className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;