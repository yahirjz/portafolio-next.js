import { data } from "./data";
import { dataEn } from "./data.en";
import type { Locale } from "@/lib/i18n";

export type Content = typeof data;

export const getContent = (locale: Locale): Content => (locale === "en" ? dataEn : data);
