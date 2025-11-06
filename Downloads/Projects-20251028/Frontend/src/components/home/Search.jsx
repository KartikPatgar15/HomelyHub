import React,{useState} from 'react';
import {DatePicker,Space} from "antd"
import "react-datepicker/dist/react-datepicker.css";
import "../../css/Home.css"


const Search = () => {
    const {RangePicker}= DatePicker;
    const [keyword,setKeyword]=useState({
        city:"",
        guests:"",
        dataIn:"",
        dataOut:""
    });
const [value,setValue]= useState([])
    function searchHandler(e){
        e.preventDefault();
        setKeyword({city:"",guests:"",dataIn:"",dataOut:""})   
        setValue([])   
    }

    function returnDate(date,dateString){
        setValue([date[0], date[1]]);
        updateKeyword("dateIn", dateString[0]);
        updateKeyword("dateOut", dateString[1]);
    }

    function updateKeyword(field,value){
        setKeyword((prevKeyword)=>({
            ...prevKeyword,
            [field]:value
        }));
    }

  return (
    <>
    <div className='searchbar'>
        <input
        className='search'
        id="search_destination"
        placeholder='Search destination'
        type='text'
        value= {keyword.city}
        onChange={(e)=> updateKeyword("city",e.target.value)}

    />
    <Space direction='vertical' size={12} className='search'>
       <RangePicker
       value={value}
       format="DD-MM-YYYY"
       picker="date"
       className='date_picker'
       disableDate={(current)=>{
         return current && current.isBefore(Date.now(),"day")
       }}
       onChange={returnDate}
       />
    </Space>
    <input
        className='search'
        id="addguest"
        placeholder='Add guests'
        type='number'
        value={keyword.guests}
        onChange={(e)=> updateKeyword("guest",e.target.value)}
        />
        <span className='material-symbols-outlined searchicon' onClick={searchHandler}>search</span>
   
    </div>
    </>
  )
}

export default Search