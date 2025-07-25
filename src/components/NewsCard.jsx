export default function NewsCard({ title, image, date, link }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-[180px] object-cover"
      />
      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800 leading-snug line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-gray-500">{date}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Baca Selengkapnya →
        </a>
      </div>
    </div>
  );
}
