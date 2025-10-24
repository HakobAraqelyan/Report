import { useHttp } from "../hooks/http.hook"

const useUserService = () => {
    const { request } = useHttp();

    const getUserInfo = async (data) => {
        console.log(data);
        
        const res = await request(
            '/api/v1/user',
            "GET",
            null,
            {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.accessToken}`
            }
        );
        return res;
    };

    return { getUserInfo };
}

export default useUserService;