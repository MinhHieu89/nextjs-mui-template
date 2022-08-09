import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { SessionProvider } from 'next-auth/react';

import theme from '../theme';
import createEmotionCache from '../helpers/createEmotionCache';
import { AppLayout } from '@/components/layout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type MyAppProps<P = {}> = AppProps<P> & {
	Component: Page<P>;
	emotionCache?: EmotionCache;
	session: any;
};

const defaultGetLayout: GetLayout = (
	page: React.ReactNode
): React.ReactNode => <AppLayout>{page}</AppLayout>;

export default function MyApp(props: MyAppProps) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
		session,
	} = props;

	const getLayout = Component.getLayout ?? defaultGetLayout;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
			</Head>
			<SessionProvider session={session}>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					{getLayout(<Component {...pageProps} />)}
				</ThemeProvider>
			</SessionProvider>
		</CacheProvider>
	);
}
