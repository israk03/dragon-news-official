import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

export default function NewsCard({ news }) {
  return (
    <div className="card bg-base-100 shadow-md border mb-5">
      <div className="card-body">
        {/* Author Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={news.author.img}
              alt={news.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">{news.author.name}</h3>
              <p className="text-sm text-gray-500">
                {news.author.published_date}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            {/* Share Button */}
            <button className="btn btn-circle btn-outline btn-sm">
              <FaShareAlt className="w-4 h-4" />
            </button>

            {/* Save Button */}
            <button className="btn btn-circle btn-outline btn-sm">
              <FaBookmark className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="card-title text-lg mt-3">{news.title}</h2>

        {/* Thumbnail */}
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="w-full h-64 object-cover rounded-md my-3"
        />

        {/* Details */}
        <p className="text-sm text-gray-600">
          {news.details.slice(0, 150)}...{" "}
          <span className="text-blue-500">Read More</span>
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < Math.round(news.rating.number)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="font-medium">{news.rating.number}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEye />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
