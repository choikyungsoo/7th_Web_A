import React from 'react';
import { styled } from "styled-components"
import { Item } from './Exporter';
import SyncLoader from "react-spinners/SyncLoader"
import { MdError } from "react-icons/md";

const Itemlist = ({ todos,editingId, setEditingId, patchData, updateTodo, deleteData, isLoading, isError }) => {

  if(isLoading){
    return(
      <SpinnerContainer>
        <SyncLoader
          size={10}
          aria-label='로딩중 입니다.'
        />
        <SpinnerText>게시글을 불러오는 중입니다.</SpinnerText>
      </SpinnerContainer>
    )
  }

  if(isError){
    return(
      <ErrorContianer>
        <MdError 
        style={{
          color: 'red',
          fontSize: 130,
        }}
        />
        <ErrorText>에러가 발생했습니다</ErrorText>
      </ErrorContianer>
    )
  }
  return (
    <ItemContainer>
      {todos && todos.map((todo) => (
        <Item
          key={todo.id}
          data={todo}
          editingId={editingId}
          setEditingId={setEditingId}
          patchData={patchData}
          updateTodo={updateTodo}
          deleteData={deleteData}
          isLoading={isLoading}
          isError={isError}
        />))
      }
    </ItemContainer>
  );
};

export default Itemlist;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`


const SpinnerContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SpinnerText = styled.p`
  margin-top: 60px;
  font-size: 16px;
  font-weight: 600;
`

const ErrorContianer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const ErrorText = styled.p`
  font-size: 16px;
  font-weight: 600;
`