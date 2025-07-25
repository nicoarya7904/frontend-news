import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const [kategori, setKategori] = useState("terbaru");
  const [articles, setArticles] = useState([]);
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
        console.error("Gagal ambil data:", err);
        setLoading(false);
      });
  }, [kategori]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar kategori={kategori} setKategori={setKategori} />

      <main className="container mx-auto px-4 py-8 flex-grow">
        {loading ? (
          <p className="text-center text-gray-600">Memuat berita...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                image={item.thumbnail}
                date={item.pubDate}
                link={item.link}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
