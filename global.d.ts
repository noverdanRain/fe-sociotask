import { routing } from "@/i18n/routing";
import intlMessages from "@/intl/en.json";

declare module "next-intl" {
    interface AppConfig {
        Locale: (typeof routing.locales)[number];
        Messages: typeof intlMessages;
    }
}
