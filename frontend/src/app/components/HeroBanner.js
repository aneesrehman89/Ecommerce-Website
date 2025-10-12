"use client";

export default function HeroBanner({ hero }) {
  return (
    <div className="relative w-full bg-[#f5e8d3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative h-[320px] sm:h-[450px] lg:h-[600px] flex items-center justify-center">
          {/* Collection Text - Top Left */}
          <div className="absolute top-4 left-2 sm:top-8 sm:left-8 z-10">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif text-gray-900 mb-1">
              {hero.collectionName}
            </h2>
            <p className="text-[10px] sm:text-sm text-gray-600 italic">
              {hero.tagline}
            </p>
          </div>

          {/* Season Label - Top Right */}
          <div className="absolute top-4 right-2 sm:top-8 sm:right-8 z-10 text-right">
            <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">
              {hero.season}
            </div>
            <div className="text-[10px] sm:text-sm text-gray-600 font-medium">
              {hero.status}
            </div>
          </div>

          {/* Model Image - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 z-0">
            <img
              src={hero.modelImage}
              alt="Model wearing collection"
              className="h-[220px] sm:h-[320px] md:h-[340px] lg:h-[550px] w-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
