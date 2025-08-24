import type { Listing } from "../data/listing";

export default function ListingCard({ listing }: { listing: Listing }) {
    return(
        <article className = "w-72 rounded-2xl overflow-hidden border bg-white shadow hover:shadow-xl transition-shadow">
            {   }
            <div className ="aspect-[4/3] w-full overflow-hidden">
                <img
                    src={listing.imageUrl}
                    alt={listing.title}
                    className="h-full w-full object-cover"
                />
            </div>
            
            {   }
            <div className="p-3">
                <div className="flex items-center justify-between"> 
                    <h3 className="font-semibold text-gray-900 line-clmap-1">{listing.title}</h3>
                    <span className="text-sm text-gray-600">{listing.rating}⭐ </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-1">{listing.location}</p>
                <p className="mt-1 tect-sm">
                    <span className="font-bold">¥{listing.pricePerNight.toLocaleString()}</span>
                    <span className="text-gray-600"> /泊</span>
                </p>
            </div>  
        </article>
    );
}