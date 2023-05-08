import Layout from '@/components/layouts/Layout'
import PostingWrapper from '@/components/provider/CreatePostinProvider'
import UserWrapper, { useUserContext } from '@/components/provider/CreateUserProvider'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {

  return(
    <PostingWrapper>
      <UserWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </UserWrapper>
    </PostingWrapper>

  ) 
}
