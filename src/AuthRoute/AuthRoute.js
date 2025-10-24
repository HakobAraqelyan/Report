import { Navigate } from 'react-router-dom';

const AuthRoute = ({children = <Navigate to="/Login" replace />}) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    
    if (!(accessToken && refreshToken)) {
        return children;
    }
    else {
        return <Navigate to="/Unit" replace />;
    }
};


export default AuthRoute;