import { Gift } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";
import { trackEvent } from "../../utils/tracking";
import { buildEtsyUrl } from "../../utils/urlBuilder";

const HeroSection = () => {
  const { t } = useTranslation();

  const handleBuyClick = () => {
    trackEvent("ViewContent", {
      content_name: "CLAAS Dispenser",
      content_type: "product",
      value: 199,
      currency: "EUR",
      source: "hero",
    });
  };

  const etsyHref = buildEtsyUrl(null);

  return (
    <section className="relative lg:min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 lg:flex lg:items-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(16,185,129,.10) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(6,182,212,.10) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-10 md:py-14 lg:py-20 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          <div className="lg:col-span-6 hidden lg:block">
            <div className="max-w-xl">
              <h1 className="text-5xl lg:text-7xl font-light text-slate-900 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium">
                  CLAAS
                </span>
                <br />
                <span className="text-emerald-500 font-light">
                  {t("dispenser")}
                </span>
                <br />
                <span className="text-2xl lg:text-3xl text-slate-500 font-light">
                  {t("byBoro")}
                </span>
              </h1>

              <p className="mt-6 text-2xl text-slate-900/90 font-light leading-snug">
                {t("heroTagline")}
              </p>

              <div className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 px-5 py-2.5 shadow-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-slate-700 font-medium tracking-wide">
                  {t("heroBullets")}
                </span>
              </div>

              <a
                href={etsyHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBuyClick}
                className="mt-10 inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 
                           hover:from-emerald-600 hover:to-teal-700 text-white font-semibold text-lg rounded-2xl 
                           transform hover:scale-[1.03] transition-all duration-300 shadow-xl hover:shadow-emerald-500/25"
              >
                <Gift className="mr-3" size={22} />
                {t("buyOnEtsy")}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-4xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl" />
              <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-100 group-hover:shadow-3xl transition-all duration-500">
                <img
                  src="/images/class1.jpg"
                  alt="CLAAS Getränkespender"
                  className="w-full h-auto rounded-2xl group-hover:scale-[1.015] transition-transform duration-500"
                />
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-xl font-medium shadow-lg text-sm hidden md:block">
                  {t("new")}
                </div>
              </div>
            </div>

            <div className="lg:hidden mt-8 text-center">
              <div className="max-w-xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-light text-slate-900 leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium">
                    CLAAS
                  </span>
                  <br />
                  <span className="text-emerald-500 font-light">
                    {t("dispenser")}
                  </span>
                  <br />
                  <span className="text-xl sm:text-2xl text-slate-500 font-light">
                    {t("byBoro")}
                  </span>
                </h1>

                <p className="mt-5 text-xl text-slate-900/90 font-light leading-snug">
                  {t("heroTagline")}
                </p>

                <div className="mt-4 inline-flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 px-4 py-2 shadow-sm">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-sm sm:text-base text-slate-700 font-medium tracking-wide">
                    {t("heroBullets")}
                  </span>
                </div>

                <a
                  href={etsyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleBuyClick}
                  className="mt-8 inline-flex items-center px-9 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 
                             hover:from-emerald-600 hover:to-teal-700 text-white font-semibold text-lg rounded-2xl 
                             transform hover:scale-[1.03] transition-all duration-300 shadow-xl hover:shadow-emerald-500/25"
                >
                  <Gift className="mr-3" size={20} />
                  {t("buyOnEtsy")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
