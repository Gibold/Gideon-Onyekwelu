import React, { useState } from 'react';
import { Search, MapPin, Package, CheckCircle2, Circle, Truck } from 'lucide-react';
import { ShipmentData, ShipmentStatus } from '../types';

const Tracking: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [shipment, setShipment] = useState<ShipmentData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock data simulation
  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setLoading(true);
    setError('');
    setShipment(null);

    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      // Demo ID: SW-12345
      if (trackingId.toUpperCase() === 'SW-12345') {
        setShipment({
          trackingId: 'SW-12345',
          origin: 'Shanghai, CN',
          destination: 'Los Angeles, USA',
          estimatedDelivery: 'Oct 24, 2023',
          currentStatus: ShipmentStatus.IN_TRANSIT,
          updates: [
            { timestamp: 'Oct 20, 08:30 AM', location: 'Pacific Ocean', status: ShipmentStatus.IN_TRANSIT, description: 'Vessel en route to destination port.' },
            { timestamp: 'Oct 18, 04:15 PM', location: 'Shanghai Port', status: ShipmentStatus.PICKED_UP, description: 'Cargo loaded onto vessel.' },
            { timestamp: 'Oct 17, 10:00 AM', location: 'Shanghai Warehouse', status: ShipmentStatus.ORDER_PLACED, description: 'Shipment received at origin facility.' },
          ]
        });
      } else {
        setError('Tracking ID not found. Try "SW-12345" for a demo.');
      }
    }, 1000);
  };

  const getStatusIcon = (status: ShipmentStatus, current: boolean) => {
    if (current) return <div className="animate-pulse bg-blue-100 p-1 rounded-full"><Truck className="h-6 w-6 text-blue-600" /></div>;
    return <CheckCircle2 className="h-6 w-6 text-green-500" />;
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Track Your Shipment</h1>
          <p className="text-slate-600">Enter your tracking number to see real-time updates.</p>
        </div>

        {/* Search Box */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 mb-10">
          <form onSubmit={handleTrack} className="flex gap-4 flex-col sm:flex-row">
            <div className="flex-1 relative">
              <Package className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter Tracking ID (Try SW-12345)"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-colors disabled:opacity-70 flex items-center justify-center"
            >
              {loading ? (
                 <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                 <>Track <Search className="ml-2 h-4 w-4" /></>
              )}
            </button>
          </form>
          {error && <p className="text-red-500 mt-4 text-sm font-medium bg-red-50 p-3 rounded-md">{error}</p>}
        </div>

        {/* Results */}
        {shipment && (
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="bg-slate-900 p-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-slate-400 text-sm mb-1">Tracking ID</p>
                <h2 className="text-2xl font-mono font-bold">{shipment.trackingId}</h2>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-sm mb-1">Estimated Delivery</p>
                <p className="text-xl font-bold text-green-400">{shipment.estimatedDelivery}</p>
              </div>
            </div>

            {/* Status Bar */}
            <div className="p-6 border-b border-gray-100 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
               <div className="flex items-center gap-2">
                 <MapPin className="h-5 w-5 text-gray-400" />
                 <span className="font-medium text-gray-900">{shipment.origin}</span>
               </div>
               <div className="flex-1 h-px bg-gray-300 w-full sm:w-auto mx-4 relative">
                  <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 bg-gray-50 px-2">
                    <Truck className="h-4 w-4 text-gray-400" />
                  </div>
               </div>
               <div className="flex items-center gap-2">
                 <MapPin className="h-5 w-5 text-gray-400" />
                 <span className="font-medium text-gray-900">{shipment.destination}</span>
               </div>
            </div>

            {/* Timeline */}
            <div className="p-8">
              <h3 className="font-bold text-gray-900 mb-6">Shipment History</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {shipment.updates.map((update, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      {idx === 0 ? (
                        <div className="w-3 h-3 bg-blue-600 rounded-full animate-ping" />
                      ) : (
                        <div className="w-3 h-3 bg-slate-300 rounded-full" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-800">{update.status}</span>
                        <time className="font-mono text-xs text-slate-500">{update.timestamp}</time>
                      </div>
                      <p className="text-slate-600 text-sm">{update.description}</p>
                      <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {update.location}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;