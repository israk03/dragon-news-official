import { useEffect, useState } from "react";

export default function LeftNav() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  //   {"category_id":"01","category_name":"Breaking News"}
  return (
    <div>
      <h2 className="font-semibold">All Categories ({categories.length})</h2>
      <div className="flex flex-col gap-2 mt-3">
        {categories.map((category) => (
          <button
            className="btn py-2 hover:bg-gray-500 hover:text-white rounded-sm"
            key={category.category_id}
          >
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
}
