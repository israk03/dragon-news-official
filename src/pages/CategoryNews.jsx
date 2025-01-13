import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

export default function CategoryNews() {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <h2 className="font-semibold">Dragon News Home</h2>
      <p className="text-gray-300">
        {news.length} news found in this category.
      </p>
      <div className="mb-2">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
}
