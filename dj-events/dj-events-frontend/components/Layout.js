import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import ShowCase from './ShowCase';
import { useRouter } from 'next/router';

export default function Layout({ title, keywords, description, children }) {
   const router = useRouter();
   return (
      <div>
         <Head>
            <title>{title}</title>
            <meta name='description' content={description} />

            <meta name='keywords' content={keywords} />
         </Head>

         <Header />
         {router.pathname === '/' && <ShowCase />}
         <div className={styles.container}>{children}</div>
         <Footer />
      </div>
   );
}

Layout.defaultProps = {
   title: 'DJ Events | Find the hottest Parties',
   description: 'Find the latest DJ and other Events',
   keywords: 'whatever',
};
