import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [kategori, setKategori] = useState("terbaru");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api-berita-indonesia.vercel.app/cnn/${kategori}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.data.posts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal fetch data:", err);
        setLoading(false);
      });
  }, [kategori]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col">
      <Navbar kategori={kategori} setKategori={setKategori} />

      {loading ? (
        <div className="text-center text-gray-600 text-lg py-10">
          Memuat berita...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              image={item.thumbnail}
              date={new Date(item.pubDate).toLocaleString("id-ID", {
                dateStyle: "long",
                timeStyle: "short",
              })}
              link={item.link}
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}
