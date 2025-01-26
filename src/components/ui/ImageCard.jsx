const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);
};

export default function ImageCard({ imageUrl, caption, className, price }) {
  return (
    <figure className={`${className} w-[250px]   overflow-hidden rounded-base border-2 border-border  dark:border-darkBorder bg-main font-base shadow-light dark:shadow-dark`}>
      <img className="w-full aspect-[4/3]" src={imageUrl} alt="image" />
      <figcaption className="border-t-2 text-text border-border dark:border-darkBorder p-4">
        {caption}
        <p>{formatRupiah(price)},-</p>
      </figcaption>
    </figure>
  );
}
