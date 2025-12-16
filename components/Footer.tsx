import React from 'react';
import { Truck, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 p-1.5 rounded-lg">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">SwiftStream</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Global logistics solutions powered by advanced AI and a worldwide network of partners. Delivering excellence since 2010.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Air Freight</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Ocean Cargo</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Road Transport</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Warehousing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">News</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                123 Logistics Way, New York, NY
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-500" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-500" />
                support@swiftstream.com
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <Linkedin className="h-5 w-5 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-white cursor-pointer" />
              <Facebook className="h-5 w-5 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} SwiftStream Logistics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;