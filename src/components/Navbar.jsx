export default function Navbar({ kategori, setKategori }) {
  const options = [
    "terbaru",
    "nasional",
    "internasional",
    "ekonomi",
    "olahraga",
    "teknologi",
    "hiburan",
    "gaya-hidup",
  ];

  return (
    <header className="bg-white shadow-md px-6 py-4 rounded-md mb-6 flex flex-col md:flex-row items-start md:items-center justify-between">
      <h1 className="text-2xl font-bold text-blue-700">Portal Berita</h1>
      <select
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
        className="mt-3 md:mt-0 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt.charAt(0).toUpperCase() + opt.slice(1).replace("-", " ")}
          </option>
        ))}
      </select>
    </header>
  );
}
