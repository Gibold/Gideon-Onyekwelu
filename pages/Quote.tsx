import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { generateLogisticsQuote } from '../services/geminiService';
import { QuoteRequest, QuoteResponse } from '../types';

const Quote: React.FC = () => {
  const [formData, setFormData] = useState<QuoteRequest>({
    origin: '',
    destination: '',
    weight: 10,
    dimensions: '',
    type: 'air'
  });
  
  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'weight' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.origin || !formData.destination) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError('');
    setQuote(null);

    try {
      const result = await generateLogisticsQuote(formData);
      setQuote(result);
    } catch (err) {
      setError('Failed to generate quote. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Form Section */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">Get an Instant Quote</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Origin City/Port</label>
                  <input
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="e.g. New York"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Destination City/Port</label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="e.g. London"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Weight (kg)</label>
                   <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Dimensions</label>
                   <input
                    type="text"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    placeholder="L x W x H cm"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Type</label>
                   <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                   >
                     <option value="air">Air Freight</option>
                     <option value="ocean">Ocean Freight</option>
                     <option value="road">Road Transport</option>
                     <option value="rail">Rail Freight</option>
                   </select>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? 'Analyzing Routes with AI...' : 'Generate Quote'}
                {!loading && <ArrowRight className="h-5 w-5" />}
              </button>
            </form>
            
            <p className="mt-4 text-xs text-slate-400 text-center">
               *Estimates provided by SwiftAI. Actual rates may vary based on exact volume and dates.
            </p>
          </div>

          {/* Result Section */}
          <div className="flex flex-col justify-center">
            {quote ? (
               <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 relative overflow-hidden animate-fade-in-up">
                 <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-green-500"></div>
                 
                 <div className="flex items-center gap-2 mb-6 text-green-600">
                    <Check className="h-6 w-6" />
                    <span className="font-bold text-lg">Quote Ready</span>
                 </div>

                 <div className="mb-8">
                    <p className="text-slate-500 text-sm uppercase tracking-wide font-semibold mb-1">Estimated Cost</p>
                    <div className="text-5xl font-bold text-slate-900">
                       {quote.currency === 'USD' ? '$' : quote.currency}{quote.estimatedCost.toLocaleString()}
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                       <p className="text-slate-500 text-xs uppercase font-bold mb-1">Transit Time</p>
                       <p className="text-lg font-semibold text-slate-800">{quote.transitTimeDays}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                       <p className="text-slate-500 text-xs uppercase font-bold mb-1">Service Type</p>
                       <p className="text-lg font-semibold text-slate-800 capitalize">{formData.type}</p>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <div>
                       <h4 className="font-bold text-slate-900 mb-2">Route Summary</h4>
                       <p className="text-slate-600 text-sm leading-relaxed">{quote.routeSummary}</p>
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 mb-2">AI Recommendation</h4>
                       <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-blue-800 text-sm">
                          {quote.recommendation}
                       </div>
                    </div>
                 </div>

                 <button className="w-full mt-8 border-2 border-slate-900 text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-900 hover:text-white transition-colors">
                    Book This Shipment
                 </button>
               </div>
            ) : (
               <div className="text-center p-10 opacity-60">
                  <img 
                    src="https://picsum.photos/400/300?grayscale" 
                    alt="Logistics" 
                    className="w-full h-64 object-cover rounded-2xl mb-6 opacity-50"
                  />
                  <h3 className="text-xl font-medium text-slate-400">Your custom logistics plan awaits</h3>
                  <p className="text-slate-400 text-sm mt-2">Fill out the form to let our AI calculate the best route and price for you.</p>
               </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Quote;