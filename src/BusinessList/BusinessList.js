import { useDispatch, useSelector } from "react-redux";

import Loading from "../Loading/Loading";
import ErrorMessage from './../errorMessage/ErrorMessage';
import { fetchGetBusinessRoles, selectAll } from "./businessListSlice";
import store from './../store/index';
import { useEffect } from "react";

import './BusinessList.scss'
import { useNavigate } from "react-router-dom";


const BusinessList = () => {
  const { status } = useSelector(state => state.businessRoles);
  const businessList = selectAll(store.getState())
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchGetBusinessRoles())
  }, []);

  const onSelectBusiness = (store) => {
    localStorage.setItem('store', JSON.stringify(store));
    console.log(store);

    navigate('/Unit', {replace: true});
  }

  const onAddBusiness = () => {

  }
  
  const RenderBusinessList = (list) => {
        
    return (
      <div className="content-business-list">
        <button
          className="add-business"
          onClick={onAddBusiness}
          >
          Add Business
        </button>
        <ul className="business-list">
          {list.map(item => {
            const { id, name, description } = item;
            
            return (
              <div
                key={id}
                className="business-item-card"
                onClick={() => onSelectBusiness(item)}
                >
                <p className="business-item id">{id}:</p>
                <h2 className="business-item name">{name}</h2>
                <p className="business-item description">Description: {description}</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className="content-business">
      {status === 'loading' && <Loading />}
      {status === 'error' && <ErrorMessage error={status.error} />}
      {status === 'success' && RenderBusinessList(businessList)}
    </div>
  );
}

export default BusinessList;