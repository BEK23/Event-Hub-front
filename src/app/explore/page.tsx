"use client";

import { getCommunities } from "@/api/communities";
import { BASE_URL } from "@/api/interceptor";
import { ICommunity } from "@/types/community";
import { Input } from "@heroui/input";
import { Avatar } from "@heroui/react";
import { Loader2Icon, SearchIcon } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

export default function ExplorePage() {
  const [loading, setLoading] = useState(false);
  const [communities, setCommunities] = useState<ICommunity[]>([]);
  const [search, setSearch] = useState("");
  const [filteredCommunities, setFilteredCommunities] = useState<ICommunity[]>(
    []
  );

  useEffect(() => {
    const fetchCommunities = async () => {
      const result = await getCommunities({});
      setCommunities(result.data.data);
      setFilteredCommunities(result.data.data);
    };
    fetchCommunities();
  }, []);

  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      const filtered = communities.filter((community) =>
        community.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCommunities(filtered);
      setLoading(false);
    }, 300),
    [communities]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setLoading(true);
    debouncedSearch(value);
  };

  return (
    <div className="h-[calc(100%-48px)] bg-white rounded-lg text-foreground w-full px-4">
      <h1 className="mt-4 text-center text-2xl font-bold mb-2">Explore</h1>

      <Input
        startContent={<SearchIcon className="text-gray-600" />}
        value={search}
        onChange={handleSearch}
        placeholder="Search communities..."
        endContent={loading ? <Loader2Icon className="animate-spin" /> : null}
      />

      {filteredCommunities.length > 0 ? (
        <div className="space-y-4 mt-4">
          {filteredCommunities.map((community) => (
            <div key={community.id} className="flex gap-4 items-center">
              <Avatar
                size="lg"
                src={`${BASE_URL}${community.photo.url}`}
                classNames={{ base: "shrink-0" }}
              />
              <h2 className="text-lg font-semibold">{community.name}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-8 text-gray-600">No communities found</p>
      )}
    </div>
  );
}

function debounce<T extends (...args: string[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
