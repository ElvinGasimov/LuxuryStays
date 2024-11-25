import { Award, Users, Globe, Shield } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const About = () => {
  return (
    <div className="pt-20">
      <PageHeader
        title="About LuxuryStays"
        description="Discover our story and commitment to excellence"
        image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80"
      />

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Story */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2010, LuxuryStays has revolutionized the way people experience luxury accommodations worldwide. Our journey began with a simple vision: to create unforgettable stays for discerning travelers.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we partner with over 500 premium hotels across 50 countries, ensuring each property meets our exceptional standards of luxury, comfort, and service.
                </p>
              </div>
              <div className="relative h-96">
                <img
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80"
                  alt="Luxury Hotel Interior"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'Committed to providing the highest standards of luxury and comfort',
              },
              {
                icon: Users,
                title: 'Personal Touch',
                description: 'Tailored experiences for each guests unique preferences',
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Premium properties across all major destinations worldwide',
              },
              {
                icon: Shield,
                title: 'Trust',
                description: 'Building lasting relationships through reliability and transparency',
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Team */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'CEO & Founder',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
                },
                {
                  name: 'Michael Chen',
                  role: 'Chief Operations Officer',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
                },
                {
                  name: 'Emma Williams',
                  role: 'Head of Customer Experience',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;