import { useHttp } from '../hooks/http.hook';


const useAuthService = () => {    
    const { request } = useHttp();

    const postRegistrations = async (data) => {
        const JSONData =  JSON.stringify(data);
        const res = await request(`/auth/registrations`, 'POST', JSONData);
        
        return res;
    };

    const postLogin = async (data) => {
        const JSONData =  JSON.stringify(data);
        const res = await request('/auth/login', 'POST', JSONData);
        
        return res;
    };

    const postLogout = async (data) => {
        
        const res = await request(
            '/api/v1/auth/logout',
            'POST',
            null,
            {
                'Authorization': `Bearer ${data.accessToken}`
            }
        );        
        
        return res;
    };

    const postForgotPassword = async (data) => {
        const JSONData =  JSON.stringify(data);
        const res = await request(`$/auth/forgotPassword`, 'POST', JSONData);
        
        return res;
    };

    return {postLogin, postRegistrations, postLogout, postForgotPassword}
}

export default useAuthService;