import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

const useCustomFetch = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
      setIsLoading(true);
      try{
        const {data} =  await axiosInstance.get('/todo');
        setData(data[0]);
      } catch(error){
        setIsError(true);
      } finally{
        setIsLoading(false);
      }
    }

  return {data, isLoading, isError, fetchData}
}

export default useCustomFetch;