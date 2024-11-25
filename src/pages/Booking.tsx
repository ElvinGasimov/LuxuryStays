import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Users, CreditCard, BedDouble, Clock } from 'lucide-react';
import { format } from 'date-fns';
import PageHeader from '../components/PageHeader';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const hotelId = searchParams.get('hotel');

  // Mock hotel data - in a real app, fetch this based on hotelId
  const hotel = {
    id: hotelId || '1',
    name: 'Grand Plaza Hotel',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    price: 299,
    rating: 4.8,
  };

  const [formData, setFormData] = useState({
    checkIn: format(new Date(), 'yyyy-MM-dd'),
    checkOut: format(new Date(Date.now() + 86400000), 'yyyy-MM-dd'),
    guests: 2,
    roomType: 'deluxe',
    specialRequests: '',
  });

  const roomTypes = {
    standard: { name: 'Standard Room', price: hotel.price },
    deluxe: { name: 'Deluxe Room', price: hotel.price * 1.5 },
    suite: { name: 'Executive Suite', price: hotel.price * 2 },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
  };

  const calculateTotal = () => {
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    const roomPrice = roomTypes[formData.roomType as keyof typeof roomTypes].price;
    return nights * roomPrice;
  };

  return (
    <div className="pt-20">
      <PageHeader
        title="Book Your Stay"
        description="Complete your reservation at our luxury hotel"
        image={hotel.image}
      />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Reservation Details</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
                        Check-in Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="checkIn"
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleChange}
                          min={format(new Date(), 'yyyy-MM-dd')}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        <Calendar className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
                        Check-out Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="checkOut"
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleChange}
                          min={formData.checkIn}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        <Calendar className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Guests
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          id="guests"
                          name="guests"
                          min="1"
                          max="4"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        <Users className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">
                        Room Type
                      </label>
                      <div className="relative">
                        <select
                          id="roomType"
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        >
                          {Object.entries(roomTypes).map(([key, { name, price }]) => (
                            <option key={key} value={key}>
                              {name} - ${price}/night
                            </option>
                          ))}
                        </select>
                        <BedDouble className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requests
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      rows={4}
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Any special requests or preferences..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">Check-in</span>
                    </div>
                    <span className="font-medium">{format(new Date(formData.checkIn), 'MMM dd, yyyy')}</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">Check-out</span>
                    </div>
                    <span className="font-medium">{format(new Date(formData.checkOut), 'MMM dd, yyyy')}</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">Guests</span>
                    </div>
                    <span className="font-medium">{formData.guests}</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <BedDouble className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">Room Type</span>
                    </div>
                    <span className="font-medium">
                      {roomTypes[formData.roomType as keyof typeof roomTypes].name}
                    </span>
                  </div>
                  <div className="pt-4">
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${calculateTotal()}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      *Taxes and fees included
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h4 className="font-medium text-gray-900">Payment Methods</h4>
                  <div className="flex items-center space-x-4">
                    <CreditCard className="h-8 w-8 text-gray-400" />
                    <span className="text-gray-600">We accept all major credit cards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;