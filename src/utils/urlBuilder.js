export const buildEtsyUrl = (portions) => {
  const baseUrl = "https://boropl.etsy.com/listing/1844578572";
  const utm = new URLSearchParams({
    utm_source: "landing_page",
    utm_medium: "website",
    utm_campaign: "claas_dispenser",
    utm_content: portions ? `${portions}_portions` : "hero_button",
  });
  return `${baseUrl}?${utm.toString()}`;
};
