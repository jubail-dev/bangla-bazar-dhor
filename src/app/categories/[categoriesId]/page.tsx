import ProductCard from "@/components/shared/ProductCard";
import { ProductItem } from "@/types/ProductType";

type Props = {
  params: Promise<{ categoriesId: string }>;
};

const toBnDigit = (num: number | string): string => {
  const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .replace(/\d/g, (digit) => bnDigits[parseInt(digit, 10)]);
};

const ProductCategories = async ({ params }: Props) => {
  const { categoriesId } = await params;

  const response = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoriesId}`,
    { next: { revalidate: 60 } }
  );
  
  const products: ProductItem[] = await response.json();

  const categoryName = products?.[0]?.categoryNameBn;
  const categoryIcon = products?.[0]?.categoryIcon;

  return (
    <div className="  bg-[#F0F5F0] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-5">
        
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
          {categoryIcon && (
            <div className="w-12 h-12 relative flex-shrink-0 flex items-center justify-center ">
              <span className="text-4xl">{categoryIcon}</span>
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{categoryName}</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              {toBnDigit(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        
        <div className="flex justify-between items-center text-sm text-gray-600 px-1 pt-2">
          <div>
            মোট {toBnDigit(products.length)}টি পণ্য দেখানো হচ্ছে
          </div>

          {/* সাজান ফিল্টার (শুধু ডিজাইন) */}
          <div className="flex items-center gap-2">
            <span className="text-gray-600">সাজান</span>
            <div className="relative inline-block">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-xs font-semibold text-gray-800 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 focus:outline-none"
              >
                ডিফল্ট
                <svg
                  className="w-3.5 h-3.5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductCategories;