import React from 'react';
import { Plane, Ship, Truck, Package, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Air Freight',
      icon: <Plane className="h-10 w-10 text-white" />,
      desc: 'When speed is paramount, our air freight solutions ensure your goods arrive on time. We offer express, standard, and deferred air cargo services globally.',
      color: 'bg-blue-600',
      image: 'https://picsum.photos/800/600?random=1'
    },
    {
      id: 2,
      title: 'Ocean Freight',
      icon: <Ship className="h-10 w-10 text-white" />,
      desc: 'Cost-effective solutions for large volumes. We provide FCL (Full Container Load) and LCL (Less than Container Load) shipping to major ports worldwide.',
      color: 'bg-cyan-600',
      image: 'https://picsum.photos/800/600?random=2'
    },
    {
      id: 3,
      title: 'Road Transport',
      icon: <Truck className="h-10 w-10 text-white" />,
      desc: 'Flexible and reliable road transport network across continents. From door-to-door delivery to cross-border logistics, we keep your supply chain moving.',
      color: 'bg-orange-500',
      image: 'https://picsum.photos/800/600?random=3'
    },
    {
      id: 4,
      title: 'Warehousing',
      icon: <Package className="h-10 w-10 text-white" />,
      desc: 'State-of-the-art warehousing and distribution centers. We offer inventory management, pick-and-pack, and temperature-controlled storage.',
      color: 'bg-indigo-600',
      image: 'https://picsum.photos/800/600?random=4'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Logistics Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive supply chain solutions tailored to your business needs.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 relative group overflow-hidden rounded-2xl shadow-xl">
                 <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                 <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" 
                 />
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <div className={`inline-flex items-center justify-center p-3 rounded-xl shadow-lg ${service.color}`}>
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{service.desc}</p>
                <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors group">
                  Learn more 
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;