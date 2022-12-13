import {io} from "socket.io-client";
import {setSocketClient} from "./sockets.slice";

export const connectToClient = () => (dispatch: any) => {
    try {
        const client = io(process.env.BACKEND_HOST as string)
        dispatch(setSocketClient(client))
    } catch(err){

    }
}
