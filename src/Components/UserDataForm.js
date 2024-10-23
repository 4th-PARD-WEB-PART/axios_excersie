import styled from "styled-components";

// UserDataForm 컴포넌트
export const UserDataForm = (
    {userData, handleInputChange, handleSubmit, handleCancelEdit, isEdit}
) => (
    <FormContainer>
        <h2>{
                isEdit
                    ? "데이터 수정하기"
                    : "데이터 추가하기"
            }</h2>
        <Form>
            <FormField>
                <label>id</label>
                <input
                    type="number"
                    name="id"
                    value={userData.id || ""}
                    onChange={handleInputChange}
                    disabled={isEdit}/>
            </FormField>
            <FormField>
                <label>name</label>
                <input
                    type="text"
                    name="name"
                    value={userData.name || ""}
                    onChange={handleInputChange}/>
            </FormField>
            <FormField>
                <label>age</label>
                <input
                    type="number"
                    name="age"
                    value={userData.age || ""}
                    onChange={handleInputChange}/>
            </FormField>
            <FormField>
                <label>part</label>
                <input
                    type="text"
                    name="part"
                    value={userData.part || ""}
                    onChange={handleInputChange}/>
            </FormField>
            <FormField>
                <label>image</label>
                <input
                    type="text"
                    name="image"
                    value={userData.image || ""}
                    onChange={handleInputChange}/>
            </FormField>
            <ButtonContainer>
                <SubmitButton onClick={handleSubmit}>
                    {
                        isEdit
                            ? "Update Data"
                            : "Add Data"
                    }
                </SubmitButton>
                {isEdit && (<CancelButton onClick={handleCancelEdit}>취소하기</CancelButton>)}
            </ButtonContainer>
        </Form>
    </FormContainer>
);

const FormContainer = styled.div `
    width: 100%;
    max-width: 500px;
`;

const Form = styled.div `
    display: flex;
    flex-direction: column;
`;

const FormField = styled.div `
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    label {
        margin-bottom: 5px;
        flex : 1
    }
    input {
        padding: 5px;
        flex : 4
    }
`;

const ButtonContainer = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Button = styled.button `
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    color: white;
`;

const SubmitButton = styled(Button)`
    background-color: #4CAF50;
`;

const CancelButton = styled(Button)`
    background-color: #f44336;
`;
