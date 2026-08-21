import { sitemap, type SitemapEntry, type SitemapGroup } from '../data/sitemap';

export function getGroupForHref(href: string) {
	return sitemap.find((g) => g.entries.some((e) => e.href === href));
}

function getHubEntry(group: SitemapGroup | undefined): SitemapEntry | undefined {
	if (!group?.hub) return undefined;
	return group.entries.find((e) => e.href === group.hub);
}

/** Siblings in the same nav group, excluding the current page and its own hub (if the group has one). */
export function getSiblings(href: string): SitemapEntry[] {
	const group = getGroupForHref(href);
	if (!group) return [];
	return group.entries.filter((e) => e.href !== href && e.href !== group.hub);
}

export function getHub(href: string): SitemapEntry | undefined {
	const group = getGroupForHref(href);
	const hub = getHubEntry(group);
	return hub?.href === href ? undefined : hub;
}

export function getBreadcrumb(href: string) {
	const group = getGroupForHref(href);
	const crumbs = [{ label: 'Home', href: '/' }];
	if (!group) return crumbs;
	const current = group.entries.find((e) => e.href === href);
	const hub = getHubEntry(group);
	if (hub && hub.href !== href) {
		crumbs.push({ label: hub.label, href: hub.href });
	}
	if (current) crumbs.push({ label: current.label, href: current.href });
	return crumbs;
}
