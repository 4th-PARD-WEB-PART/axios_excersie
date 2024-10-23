import React, {useEffect, useState} from "react";
import {deleteUser, getUserData, postUserData, updateUserData} from "./AxiosAPI";
import styled from "styled-components";
import {UserDataForm} from "./Components/UserDataForm";
import {UserDataTable} from "./Components/UserDataTable";

// App 컴포넌트 (메인 컴포넌트)
const App = () => {
    const [userData, setUserData] = useState([]);
    const [selectedUserData, setSelectedUserData] = useState(null);
    const [newUserData, setNewUserData] = useState(initialState);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await getUserData();
            setUserData(response.data);
        } catch (error) {
            handleApiError(error, "Error fetching data:");
        }
    };

    const handlePostData = async () => {
        try {
            if (handleCheckInvalid(newUserData)) {   
                await postUserData(newUserData);
                await fetchData();
                setNewUserData(initialState);
            } else {
                alert("모든 입력값을 입력하세요.");
            }
        } catch (error) {
            handleApiError(error, "Error adding data:");
        }
    };

    const handleUpdateData = async () => {
        try {
            await updateUserData(selectedUserData.id, selectedUserData);
            await fetchData();
            setSelectedUserData(null);
        } catch (error) {
            handleApiError(error, "Error updating data:");
        }
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        const updateFunction = selectedUserData
            ? setSelectedUserData
            : setNewUserData;
        updateFunction((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCheckInvalid = (newData) => {
        if (newData.id != null && newData.id != '' && newData.name != "" && newData.age != null && newData.age != '' && newData.part != "" && newData.image != "")
            return true;
        else 
            return false;
    }

    const handleDeleteData = async (id) => {
        try {
            await deleteUser(id);
            await fetchData();
        } catch (error) {
            handleApiError(error, "Error deleting data:");
        }
    };

    const handleEditData = (data) => {
        setSelectedUserData(data);
    };

    const handleCancelEdit = () => {
        setSelectedUserData(null);
        setNewUserData(initialState);
    };

    const handleSubmit = () => {
        if (selectedUserData) {
            handleUpdateData();
        } else {
            handlePostData();
        }
    };

    const handleApiError = (error, errorMessage) => {
        console.error(errorMessage, error);
    };

    return (
        <AppContainer>
            <PageTitle>User Data 관리
                <br/>
                <span>(5차 세미나 실습)</span>
            </PageTitle>

            <UserDataForm
                userData={selectedUserData || newUserData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                handleCancelEdit={handleCancelEdit}
                isEdit={!!selectedUserData} />
            
            <UserDataTable
                userData={userData}
                handleDeleteData={handleDeleteData}
                handleEditData={handleEditData}/>
        </AppContainer>
    );
};

const initialState = {
    id: null,
    name: "",
    age: null,
    part: "",
    image: ""
};

// Styled Components
const AppContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const PageTitle = styled.h1 `
    font-size: 32px;
    margin-bottom: 20px;
    text-align: center;

    &> span {
        font-size: 20px;
    }
`;

export default App;