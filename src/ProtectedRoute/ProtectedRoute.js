import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Navigation from "../Navigation/Navigation";
import Loading from '../Loading/Loading';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Welcome from "../Welcome/Welcome";
import BusinessList from "../BusinessList/BusinessList"; 
import { fetchGetUserInfo } from "./protectedRouteSlice";

import './ProtectedRoute.scss';
import { useEffect } from "react";


const ProtectedRoute = ({children}) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    
    const store = useSelector(state => state.getUserInfo);
    const { status, entities } = store;
    
    console.log(store);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {console.log("useEffect");
    
        fetchEmployees();
    }, [])

    const fetchEmployees = () => {
        dispatch(fetchGetUserInfo())
            .then(res => {
                console.log(res);
                
                CheckEmployees(res);
            })
            .catch(error => {
                console.log('Error in CheckEmployees:', error);
                console.error('Error in CheckEmployees:', error);
            });
    }

    const CheckEmployees = (entities) => {
        console.log(
            entities
        );
            // entities.error,
            // entities.error.name === 'Error',
            // entities === undefined,
            // entities.error.message === 'Could not fetch /api/v1/user, status: 401'
        console.log(
            entities !== undefined &&
            entities.error &&
            entities.error.name === 'Error' &&
            entities.error.message === 'Could not fetch /api/v1/user, status: 401');
        
        if (
            (
                entities !== undefined &&
                entities.error &&
                entities.error.name === 'Error' &&
                entities.error.message === 'Could not fetch /api/v1/user, status: 401'
            )) {
            localStorage.clear();
            navigate('/Login');
        }
        console.log(status);
        console.log(entities);
        console.log(entities.payload.data.employees, entities.payload.status === 'success');
        
        if (entities && status === 'success') {
            const store = JSON.parse(localStorage.getItem('store'));
            if (store && store.id) {console.log("store");
            
                return children;
            }
            return entities && entities.payload.data.employees.length > 0 ? < BusinessList /> :  <Welcome /> ;
        }
        
    }
    

    if (accessToken && refreshToken) {
        
        return <div className="app-body">
                <Navigation />
            <div className="content">
                {status === 'loading' && <Loading />}
                {status === 'error' && <ErrorMessage error={status.error} />}
                {status === 'idle' && fetchEmployees()}
                {status === 'success' && CheckEmployees(entities)}
            </div>
        </div>;
    }
    else {
        return <Navigate to="/Login" replace />;
    }
};

export default ProtectedRoute;