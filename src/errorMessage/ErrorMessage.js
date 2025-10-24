import img from './error.gif';
// import { Navigate } from 'react-router-dom';

const ErrorMessage = ({error = {data: {name: "not found message", message: "error"}}}) => {

    console.log('ErrorMessage', error);

    // if (error && error.data && error.status === 401 && error.data.error_code === 'AUTH_INVALID_TOKEN') {
        // console.log('ErrorMessage', 'Clearing localStorage due to invalid token');
        // localStorage.clear();
        // return <Navigate to="/Login" replace />;
    // }

    
    return (
        <div>
            <img
                style={
                    {
                        display: 'block',
                        width: '250px',
                        height: '250px',
                        objectFit: 'contain',
                        margin: '0 auto'
                    }
                }
                src={img}
                alt="Error" />
                <h1 style={{ textAlign: 'center', fontSize: '24px', color: 'red' }}>
                    {error.data.name}
                </h1>
                <p style={{ textAlign: 'center', fontSize: '20px', color: 'red' }}>
                    {error.data.message}
                </p>
        </div>
    );
};

export default ErrorMessage;