export default function Marquee({ items }) {
  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack text-text dark:text-darkText font-base">
      <div className="animate-marquee whitespace-nowrap py-2">
        {items.map((item, index) => {
          return (
            <span key={index + 1} className="mx-4 text-4xl">
              {item}
            </span>
          );
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2">
        {items.map((item, index) => {
          return (
            <span key={index} className="mx-4 text-4xl">
              {item}
            </span>
          );
        })}
      </div>

      {/* must have both of these in order to work */}
    </div>
  );
}
