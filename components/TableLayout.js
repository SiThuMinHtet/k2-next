import React from "react";
import { useRouter } from "next/router";
import {useState} from 'react'
import Modal from "../components/Modal"
import SearchForm from "../components/SearchForm"
import BlueBox from "../components/BlueBox"
const TableLayout = ({ children, title, total, onSearch, onPrint  , formType}) => {

  const [isOpenModal , setIsOpenModal] = useState(false)

  function openModal () {
    setIsOpenModal(true)
  }

  function closeModal () {
    setIsOpenModal(false)
  }
  const router = useRouter();
  const handleAddButtonClick = () => {
    router.push("/dashboard/company/companylist/companyRegister"); // Navigate to the specified route
  };


  return (
    <div className="table-wrapper">
      <div className="table-header">
        <div className="table-header__left">

          <BlueBox/>
          <h2>{title}</h2>
          <div className="total">
            <h4>Total : </h4>
            <span>{total}</span>
          </div>
          <div className="show">
            <h4>Show : </h4>
            <select>
              <option selected>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
        <div className="table-header__right">
          <div className="input-field search">
            <input placeholder="Search..." />
            <button onClick={openModal}>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <button className="icon-button print-button" onClick={onPrint}>
            <i className="fa-solid fa-print"></i>
          </button>
          <button
            className="icon-button add-button"
            onClick={handleAddButtonClick}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="table-container">
        {children}
      </div>


      {isOpenModal && 
  <Modal isOpen={isOpenModal} onClose = {closeModal}>
         {formType =="company" && <SearchForm formType ={"company"}/>}
         {formType =="user" && <SearchForm formType ={"user"}/>}
         {formType =="access" && <SearchForm formType ={"access"}/>}
  </Modal>
}
    </div>
  );
};

export default TableLayout;
