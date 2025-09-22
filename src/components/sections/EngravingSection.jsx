import { Sparkles, Type, PenTool, BadgeCheck, Zap, Gift } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

const EngravingSection = () => {
  const { t } = useTranslation();
  const points = Array.isArray(t("engravingPoints"))
    ? t("engravingPoints")
    : [];

  return (
    <section className="py-12 md:py-18 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
            <Zap className="w-5 h-5" />
            <span className="font-bold text-lg">{t("promoLimited")}</span>
            <Zap className="w-5 h-5" />
          </div>
        </div>

        <div
          className="
            group relative overflow-hidden rounded-3xl
            bg-white/95 backdrop-blur-sm
            border-2 border-emerald-200/60
            shadow-2xl shadow-emerald-500/10
            transition-all duration-500 transform-gpu
            hover:scale-[1.02]
            hover:border-emerald-300/80
            hover:shadow-3xl hover:shadow-emerald-500/20
            will-change-transform
          "
        >
          <div
            className="
              pointer-events-none absolute -inset-5 rounded-[2.5rem]
              bg-gradient-to-br from-emerald-400/20 via-teal-400/20 to-emerald-400/20
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl
            "
          />

          <div className="absolute top-6 right-6 animate-bounce">
            <Sparkles className="w-8 h-8 text-emerald-500" />
          </div>

          <div className="relative p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-800">
                      <Gift className="w-4 h-4" />
                      {t("engravingBadge")}
                    </span>

                    <div className="flex items-center gap-3 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-full px-4 py-2">
                      <span className="text-red-500 font-bold line-through text-lg">
                        25 €
                      </span>
                      <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-bold text-lg">
                        {t("promoNowFree")}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight">
                    {t("engravingTitle")}
                  </h3>
                  <p className="text-xl text-slate-600 font-light leading-relaxed">
                    {t("engravingSubtitle")}
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                  {points.map((p, i) => (
                    <div key={i} className="flex items-start gap-4 group/item">
                      <div className="mt-1 p-2 bg-emerald-100 rounded-full group-hover/item:bg-emerald-200 transition-colors duration-300">
                        {i === 0 ? (
                          <Type className="w-5 h-5 text-emerald-600" />
                        ) : i === 1 ? (
                          <PenTool className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <BadgeCheck className="w-5 h-5 text-emerald-600" />
                        )}
                      </div>
                      <p className="text-slate-700 text-lg leading-relaxed group-hover/item:text-slate-900 transition-colors duration-300">
                        {p}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
                  <p className="text-emerald-800 font-medium text-lg mb-2">
                    {t("promoBannerLine")}
                  </p>
                  <p className="text-emerald-700">{t("engravingNote")}</p>
                </div>
              </div>

              <div className="lg:w-80 w-full">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-white text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                      <Gift className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">
                      {t("engravingCardTitle")}
                    </h4>
                    <p className="text-emerald-100">
                      {t("engravingCardSubtitle")}
                    </p>
                  </div>

                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">{t("engravingBullet1")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">{t("engravingBullet2")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">{t("engravingBullet3")}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-xs text-emerald-100">
                      {t("promoEndsSoon")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngravingSection;
