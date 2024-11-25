import { Shield, Clock, Gift, Headphones } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Services = () => {
  return (
    <div className="pt-20">
      <PageHeader
        title="Our Services"
        description="Experience luxury travel with our premium services"
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80"
      />

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Shield,
                title: 'Best Price Guarantee',
                description: 'We match any comparable price you find elsewhere',
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Round-the-clock assistance for all your needs',
              },
              {
                icon: Gift,
                title: 'Loyalty Rewards',
                description: 'Earn points with every booking and get exclusive perks',
              },
              {
                icon: Headphones,
                title: 'Concierge Service',
                description: 'Personal assistance to make your stay perfect',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-1 transition-transform duration-300"
              >
                <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Premium Services */}
          <div className="space-y-12">
            {[
              {
                title: 'Airport Transfers',
                description: 'Luxury vehicle pickup and drop-off service',
                image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80',
                features: ['Professional chauffeurs', 'Fleet of luxury vehicles', 'Flight tracking', 'Door-to-door service'],
              },
              {
                title: 'Personalized Experiences',
                description: 'Curated activities and experiences',
                image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80',
                features: ['Local guides', 'Custom itineraries', 'Exclusive access', 'Special arrangements'],
              },
              {
                title: 'Business Services',
                description: 'Complete support for business travelers',
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
                features: ['Meeting rooms', 'Tech support', 'Secretarial services', 'Business center'],
              },
            ].map((service, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-600">
                        <Shield className="h-5 w-5 text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-96">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;