"use client";

import { useMemo, useState } from "react";
import Header from "../components/Header";
import SearchBar,{type SearchParams} from "../components/SearchBar";
import ListingCard from "../components/ListingCard";
import listings,{type Listing}  from "../data/listing";

export default function Home() {
  const[query, setQuery] = useState<SearchParams>({});

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      const locOK = query.location
        ? l.location.toLowerCase().includes(query.location.toLowerCase())
        : true;
      const guestsOK = query.guests ? l.guests >= query.guests: true
      return locOK && guestsOK;
    });
  }, [query]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <SearchBar onSearch={setQuery} /> 

      <p className="text-sm text-gray-600 mb-2">{filtered.length} 件が見つかりました</p>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {filtered.map((l) => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </section>
    </main>
  );
}
