export type SearchKind = "Flights" | "Hotels" | "Cars" | "Visas";
export type Flight = { from: string; to: string; airline: string; duration: string; price: number; class: string };
export type Hotel = { city: string; name: string; rating: number; price: number; kind: string };
export type Car = { city: string; model: string; type: string; price: number };
export type Visa = { country: string; type: string; processing: string; price: number };
