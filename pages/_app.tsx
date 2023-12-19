
import { AppProps } from 'next/app';
import { AuthProvider } from "../Context/AuthContext"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
