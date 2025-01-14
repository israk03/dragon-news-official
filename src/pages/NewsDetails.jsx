import React from "react";
import Header from "../components/Header";
import RightNav from "../components/RightNav";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function NewsDetails() {
  const data = useLoaderData();
  const news = data?.data[0]; // Access the first object in the array
  const navigate = useNavigate();

  const handleBackToCategory = () => {
    navigate(`/category/${news?.category_id}`); // Navigate to the category page
  };

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={news?.image_url}
                alt={news?.title}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <button
                  className="btn btn-primary"
                  onClick={handleBackToCategory}
                >
                  Back to category
                </button>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
}
