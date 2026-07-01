export interface Route {
    label: string;
    href: string;
}

export const ROUTES: Record<string, Route> = {
  home: { label: "Heim", href: "/raptors/" },
  juniors: { label: "Nachwuchs", href: "/raptors/nachwuchs" },
  hockeycamp: { label: "Hockeycamp", href: "/raptors/hockeycamp" },
  sponsors: { label: "Sponsoren", href: "/raptors/sponsoren" },
  // reviews: { label: "Reviews", href: "/raptors/reviews" },
  // blog: { label: "Blog", href: "/raptors/blog" },
  contact: { label: "Kontakt", href: "/raptors/kontakt" },
};