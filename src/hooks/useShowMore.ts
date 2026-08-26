import { useState } from "react";

export  function useShowMore<T>(items: T[], initialCount: number) {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll
    ? items
    : items.slice(0, initialCount);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return {
    showAll,
    visibleItems,
    toggleShowAll,
  };
}