import {StyleWrapper} from "./GlobalStyles/StyleWrapper";
import {Quiz} from "./Components/Quiz/Atoms/Quiz";
import {Login} from "./Components/Auth/login";
import {useSelector} from "react-redux";
import {authSelector} from "./Store/AuthStore/config";


function App() {
const token =useSelector(authSelector.tokenSelector)
    return (
        <>

            <StyleWrapper>
                {token ?
                    <Quiz/> :
                    <Login/>
                }
            </StyleWrapper>
        </>

  );
}

export default App;
