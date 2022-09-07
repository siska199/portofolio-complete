import { useEffect } from "react";
import { Provider, useDispatch} from "react-redux";
import { handleRefresh } from "../redux/features/authSlice";
import store from "../redux/store";
import "../styles/globals.css";
import 'react-notifications/lib/notifications.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  );
}

function Wrapper({children}){
  const dispatch = useDispatch()

  useEffect(()=>{
    localStorage.getItem("token") && dispatch(handleRefresh())
  })
  return(
    <>
      {children}
    </>
  )
}

export default MyApp;
