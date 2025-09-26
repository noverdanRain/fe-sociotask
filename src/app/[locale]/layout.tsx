import type { Metadata } from "next";
import ReownProvider from "../provider/reown-provider";
import { headers } from "next/headers";
import "../globals.css";
import ChakraProviderWrapper from "../provider/chakra-provider";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import HeaderNav from "@/components/HeaderNav";

type Props = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		return {};
	}
	const t = await getTranslations({ locale, namespace: 'common.metadata' });
	return {
		title: t("title"),
		description: t("description")
	}
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
	const headersObj = await headers();
	const cookies = headersObj.get('cookie')

	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale} suppressHydrationWarning>
			<body>
				<ChakraProviderWrapper>
					<ReownProvider cookies={cookies}>
						<NextIntlClientProvider >
							<HeaderNav />
							<main>
								{children}
							</main>
						</NextIntlClientProvider>
					</ReownProvider>
				</ChakraProviderWrapper>
			</body>
		</html>
	);
}
