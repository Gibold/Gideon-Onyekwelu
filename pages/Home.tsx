import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Clock, Search } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full bg-slate-900 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="Logistics Background" 
            className="w-full h-full object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Seamless Logistics for a <span className="text-orange-500">Connected World</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Experience the future of freight with AI-driven route optimization, real-time tracking, and global reach. We move your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/quote" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:text-lg transition-all shadow-lg hover:shadow-orange-500/25">
                Get a Quote
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-3 border border-slate-500 text-base font-medium rounded-md text-slate-200 hover:bg-slate-800 md:text-lg transition-all">
                Explore Services
              </Link>
            </div>

            {/* Quick Track Widget */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl max-w-md">
                <label className="block text-sm font-medium text-slate-200 mb-2">Quick Track</label>
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        placeholder="Enter tracking ID (e.g. SW-12345)"
                        className="flex-1 bg-slate-800/50 border border-slate-600 text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder-slate-400"
                    />
                    <Link to="/tracking" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center justify-center">
                        <Search className="h-5 w-5" />
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose SwiftStream?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We combine decades of logistics expertise with cutting-edge technology to deliver superior reliability and efficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Globe className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Network</h3>
              <p className="text-slate-600 leading-relaxed">Access to over 200 countries and territories with our extensive partner network and local expertise.</p>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <Clock className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Real-Time Tracking</h3>
              <p className="text-slate-600 leading-relaxed">End-to-end visibility of your shipments with granular status updates and predictive ETA powered by AI.</p>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <Shield className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Secure & Insured</h3>
              <p className="text-slate-600 leading-relaxed">Your cargo is safe with us. We offer comprehensive insurance coverage and secure handling protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Ready to ship?</h2>
                <p className="text-slate-400">Get a competitive quote in seconds using our AI calculator.</p>
            </div>
            <Link to="/quote" className="group flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Start Shipping
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;