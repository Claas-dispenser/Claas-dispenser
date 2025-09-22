import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

const SwitcherSection = () => {
  const { t } = useTranslation();

  const pPoints = Array.isArray(t("switcherPPoints"))
    ? t("switcherPPoints")
    : [];
  const aPoints = Array.isArray(t("switcherAPoints"))
    ? t("switcherAPoints")
    : [];

  return (
    <section className="py-10 md:py-14 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
            {t("switcherTitle")}
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto" />
        </div>

        <div className="relative group max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
          <div className="relative bg-white rounded-2xl p-2 shadow-lg border border-slate-100 group-hover:shadow-xl transition-all duration-500">
            <img
              src="/images/switcher.PNG"
              alt={t("switcherImageAlt")}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="group relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute -inset-10 rounded-[2rem] bg-gradient-to-br from-emerald-200/10 via-teal-200/10 to-emerald-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
            <div className="relative p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight mb-5">
                {t("switcherPTitle")}
              </h3>
              <ul className="space-y-3">
                {pPoints.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </span>
                    <span className="text-slate-700 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* A */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute -inset-10 rounded-[2rem] bg-gradient-to-br from-emerald-200/10 via-teal-200/10 to-emerald-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
            <div className="relative p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight mb-5">
                {t("switcherATitle")}
              </h3>
              <ul className="space-y-3">
                {aPoints.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </span>
                    <span className="text-slate-700 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-2 text-sm">
            {t("switcherHint")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default SwitcherSection;
