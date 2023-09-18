import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--martian": "#f97316",
    "--martian-light": "#f9ac16",
    "--martian-dark": "#f94c16",
    "--my-pruple": "#972aff",
    "--my-green": "#00ff00",
    "--my-blue": "#0000ff",
    "--my-red": "#ff0000",
}

export const customTheme = buildLegacyTheme({
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--brand-primary": props["--martian"],
    
    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    "--default-button-color": "#666",
    "--default-button-primary-color": props["--martian"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-danger-color": props["--my-red"],
    "--default-button-warning-color": props["--martian-dark"],

    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--martian"],
});