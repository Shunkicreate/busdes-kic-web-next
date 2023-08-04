import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
		"@storybook/addon-coverage",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	staticDirs: ["../public"],
	docs: {
		autodocs: "tag",
	},
};
export default config;

