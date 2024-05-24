import { AxiosInstance } from "axios";
import { baseInstance} from "./Api";


type loginParams = {
  email: string;
  password: string;
};

const LoginService = (api: AxiosInstance = baseInstance) => ({
  login: async (params: loginParams) => {
    const response = await api.post("/login", params);
    if (response.status == 200 && response ){
      console.log("successful login request.");

      localStorage.setItem("accessToken", response.data.accessToken);
      
    }

    return response
  },

  logout: () => clearAuthTokens(),
});

function clearAuthTokens() {
  throw new Error("Function not implemented.");
}

export default LoginService;