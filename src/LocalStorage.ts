import Package from "./Package";

const keys = {
	retweeters: "lb.include-retweeters",
	hideBadgeShare: `lb.${Package.version}.hide-badge.share`,
	hideBadgeDonate: `lb.${Package.version}.hide-badge.donate`,
	hideBadgeFollow: `lb.${Package.version}.hide-badge.follow`,
	hideIdleWarning: `lb.${Package.version}.hide-idle-warning`,
	packageVersion: "lb.packageVersion",
};

export default class LocalStorage {
	static get packageVersion(): string {
		return localStorage.getItem(keys.packageVersion);
	}

	static storePackageVersion(): void {
		localStorage.setItem(keys.packageVersion, Package.version);
	}

	static get includeRetweeters(): boolean {
		const storedValue = localStorage.getItem(keys.retweeters);
		return storedValue === "true";
	}

	static set includeRetweeters(value: boolean) {
		localStorage.setItem(keys.retweeters, String(value));
	}

	static get hideBadgeShare(): boolean {
		return localStorage.getItem(keys.hideBadgeShare) === "true";
	}

	static get hideBadgeDonate(): boolean {
		return localStorage.getItem(keys.hideBadgeDonate) === "true";
	}

	static get hideBadgeFollow(): boolean {
		return localStorage.getItem(keys.hideBadgeFollow) === "true";
	}

	static set hideBadgeShare(value: boolean) {
		localStorage.setItem(keys.hideBadgeShare, String(value));
	}

	static set hideBadgeDonate(value: boolean) {
		localStorage.setItem(keys.hideBadgeDonate, String(value));
	}

	static set hideBadgeFollow(value: boolean) {
		localStorage.setItem(keys.hideBadgeFollow, String(value));
	}

	static get hideIdleWarning(): boolean {
		return localStorage.getItem(keys.hideIdleWarning) === "true";
	}

	static set hideIdleWarning(value: boolean) {
		localStorage.setItem(keys.hideIdleWarning, String(value));
	}
}
