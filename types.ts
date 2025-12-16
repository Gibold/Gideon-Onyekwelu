export enum ShipmentStatus {
  ORDER_PLACED = "Order Placed",
  PICKED_UP = "Picked Up",
  IN_TRANSIT = "In Transit",
  CUSTOMS_CLEARANCE = "Customs Clearance",
  OUT_FOR_DELIVERY = "Out for Delivery",
  DELIVERED = "Delivered",
  EXCEPTION = "Exception"
}

export interface ShipmentUpdate {
  timestamp: string;
  location: string;
  status: ShipmentStatus;
  description: string;
}

export interface ShipmentData {
  trackingId: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  currentStatus: ShipmentStatus;
  updates: ShipmentUpdate[];
}

export interface QuoteRequest {
  origin: string;
  destination: string;
  weight: number;
  dimensions: string;
  type: 'air' | 'ocean' | 'road' | 'rail';
}

export interface QuoteResponse {
  estimatedCost: number;
  currency: string;
  transitTimeDays: string;
  routeSummary: string;
  recommendation: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}