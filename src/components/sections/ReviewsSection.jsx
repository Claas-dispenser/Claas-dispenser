import { Star, MapPin } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

const ReviewsSection = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: "Johann M.",
      rating: 5,
      text: "Bin wirklich begeistert! Die Lieferung kam sogar einen Tag früher als angegeben. Das Produkt ist sehr hochwertig verarbeitet und macht optisch richtig was her. Meine Frau war skeptisch, aber jetzt nutzt sie es täglich. Klare Kaufempfehlung!",
      location: "München, Bayern",
      initials: "JM",
      bgColor: "from-blue-100 to-blue-200",
      verified: true,
    },
    {
      name: "Catalin",
      rating: 5,
      text: "Absolut wunderschön! Die Handwerkskunst ist beeindruckend - man sieht jedes kleine Detail. In unserer Küche ist es zum echten Blickfang geworden. Freunde fragen immer, wo wir es her haben. Bin sehr happy mit dem Kauf!",
      location: "Berlin",
      initials: "C",
      bgColor: "from-emerald-100 to-emerald-200",
      verified: true,
    },
    {
      name: "Nick Barnes",
      rating: 5,
      text: "Super schnelle Lieferung und die Qualität hat mich echt überrascht! Hatte zunächst Bedenken wegen Online-Kauf, aber alles top. Die abnehmbaren Griffe sind genau das, was ich gesucht habe. Funktioniert tadellos seit 3 Monaten.",
      location: "Hamburg",
      initials: "NB",
      bgColor: "from-purple-100 to-purple-200",
      verified: true,
    },
    {
      name: "Mike",
      rating: 5,
      text: "Perfektes Geschenk für meine Schwester! Die Verpackung war sehr liebevoll und das digitale Display ist wirklich praktisch. Sie nutzt es jeden Tag und schwärmt noch immer davon. Würde sofort wieder bestellen!",
      location: "Köln, NRW",
      initials: "M",
      bgColor: "from-rose-100 to-rose-200",
      verified: true,
    },
  ];

  return (
    <section className="py-6 md:py-14 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            {t("reviewsTitle")}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto" />
          <p className="text-slate-600 mt-6 text-lg font-light">
            {t("reviewsSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-slate-100  
                        hover:border-slate-200 hover:shadow-xl transition-all duration-500  
                        hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 to-teal-50/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${review.bgColor} 
                                   border-2 border-slate-100 flex items-center justify-center
                                   group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-slate-700 font-semibold text-lg">
                        {review.initials}
                      </span>
                    </div>
                    {review.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="text-slate-900 font-medium text-lg">
                          {review.name}
                        </h4>
                        <div className="flex items-center text-slate-500 text-sm mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span>{review.location}</span>
                        </div>
                      </div>

                      <div className="flex space-x-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-emerald-400 text-emerald-400 group-hover:scale-110 transition-transform duration-200"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="text-slate-600 text-lg leading-relaxed font-light">
                  “{review.text}”
                </blockquote>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center text-emerald-600 text-sm font-medium">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t("verifiedPurchase")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-slate-600 bg-white px-6 py-3 rounded-full border border-slate-200">
            <Star className="w-5 h-5 fill-emerald-400 text-emerald-400" />
            <span className="font-semibold text-lg">4.9</span>
            <span className="text-slate-500">{t("ratingAverage")}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">{t("basedOn")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
