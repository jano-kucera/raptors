import type { ImageMetadata } from 'astro';

export interface DiscoveredImage {
  src: ImageMetadata | string;
  alt: string;
}

function handleDiscoveredImages(globModules: Record<string, {
    default: ImageMetadata;
}>): DiscoveredImage[] {
  return Object.entries(globModules)
  .map(([path, mod]): DiscoveredImage => ({
    src: mod.default,
    alt: path
    .split('/').pop()!
    .replace(/\.[^.]+$/, '')        // strip extension
    .replace(/[-_]/g, ' ')          // hyphens/underscores → spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()), // Title Case
  }));
}

export const galleryImages: DiscoveredImage[] =  handleDiscoveredImages(import.meta.glob<{ default: ImageMetadata }>(
    '../assets/images/gallery/*.{jpg,jpeg,png,svg,webp,avif}',
    { eager: true },
  ));;

export const sponsorImages: DiscoveredImage[] = handleDiscoveredImages(import.meta.glob<{ default: ImageMetadata }>(
    '../assets/images/sponsors/*.{jpg,jpeg,png,svg,webp,avif}',
    { eager: true },
  ));;
