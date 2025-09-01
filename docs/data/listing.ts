export type Listing = {
    id: number;
    title: string;
    location: string;
    pricePerNight: number;
    rating: number;
    imageUrl: string;
    guests: number;
};

const listings: Listing[] = [
    {
        id: 1,
        title: "Cozy Loft in Shibuya",
        location: "Tokyo, Shibuya",
        pricePerNight: 18000,
        rating: 4.8,
        imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
        guests: 2,
    },

    {
        id: 2,
        title: "Traditional Machiya",
        location: "Kyoto, Gion",
        pricePerNight: 22000,
        rating: 4.5,
        imageUrl: "https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200",
        guests: 4,
    },

    {
        id: 3,
        title: "Beachside Cottage",
        location: "Kanagawa, Zushi",
        pricePerNight: 20000,
        rating: 4.6,
        imageUrl: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200",
        guests: 6,
    },
];

export default listings;