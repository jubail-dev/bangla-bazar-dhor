import { CategoryType } from "@/types/categoryType";

const NavLinks = async () => {
  const response = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories"
  );

  const data: CategoryType[] = await response.json();

  return (
    <nav>
      <ul className="flex items-center gap-1 sm:gap-3 md:gap-5 lg:gap-7">
        {data.map((category) => (
          <li
            key={category.id}
            className="flex shrink-0 items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-[#008a45] sm:gap-2 sm:px-3 sm:text-sm md:text-base"
          >
            <span className="text-sm sm:text-base">
              {category.icon}
            </span>

            <h3 className="whitespace-nowrap">
              {category.nameBn}
            </h3>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;