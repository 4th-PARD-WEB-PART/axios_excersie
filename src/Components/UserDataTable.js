import styled from "styled-components";
import {Button} from "./UserDataForm";

// UserDataTable 컴포넌트
export const UserDataTable = ({userData, handleDeleteData, handleEditData}) => (
    <Table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>part</th>
                <th>image</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                userData.map((data) => (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.part}</td>
                        <td>
                            <img width="100px" src={data.image} alt={`User ${data.id}`}/>
                        </td>
                        <td>
                            <DeleteButton onClick={() => handleDeleteData(data.id)}>Delete</DeleteButton>
                            <EditButton onClick={() => handleEditData(data)}>Edit</EditButton>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </Table>
);

const Table = styled.table `
    width: 500px;
    border-collapse: collapse;
    margin-bottom: 20px;
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }
    th {
        background-color: #f2f2f2;
    }
`;

const DeleteButton = styled(Button)`
    background-color: #ff5858;
    margin-right: 5px;
`;

const EditButton = styled(Button)`
    background-color: #4CAF50;
`;
