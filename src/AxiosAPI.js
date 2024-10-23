import axios from "axios";

// getUserData 함수 정의 - 비동기로 데이터를 가져오는 역할
export const getUserData = async () => {
    try {
        // axios를 사용하여 '/data.json' 엔드 포인트에서 데이터를 가져온다.
        // {write your code}

        // 가져온 데이터를 콘솔에 출력 한다.
        // {write your code}

        // 가져온 데이터를 반환한다.
        return response;
    } catch (error) {
        // 에러가 발생한 경우 콘솔에 에러 메세지 출력한다.
        console.error("Error fetching user data:", error);

        // 에러를 다시 throw하여 호출한 측에서 처리할 수 있도록 한다.
        throw error;
    }
};

// postUserData 함수 정의 - 비동기로 데이터를 추가하는 역할
export const postUserData = async (data) => {
    try {
        // axios를 사용하여 추가하려는 데이터를 담아 서버에게 데이터 전송한다.
        // {write your code}

        // 전송 후 서버로부터 받은 결과를 반환한다.
        // {write your code}
    } catch (error) {
        // 에러가 발생한 경우 콘솔에 에러 메세지 출력한다.
        console.error("Error updating user data:", error);

        // 에러를 다시 throw하여 호출한 측에서 처리할 수 있도록 한다.
        throw error;
    }
};

// updateUserData 함수 정의 - 비동기로 데이터를 수정하는 역할
export const updateUserData = async (id, data) => {
    try {
        // axios를 사용하여 수정하려는 데이터를 담아 서버에게 데이터 전송한다.
        // {write your code}

        // 전송 후 서버로부터 받은 결과를 반환한다.
       // {write your code}
    } catch (error) {
        // 에러가 발생한 경우 콘솔에 에러 메세지 출력한다.
        console.error("Error updating user data:", error);

        // 에러를 다시 throw하여 호출한 측에서 처리할 수 있도록 한다.
        throw error;
    }
};

// deleteUser 함수 정의 - 비동기로 데이터를 삭제하는 역할
export const deleteUser = async (id) => {
    try {
        // axios를 사용하여 삭제하려는 데이터의 id값을 담아 서버에게 데이터 전송한다.
        // {write your code}
        
        // 전송 후 서버로부터 받은 결과를 반환한다.
        // {write your code}
    } catch (error) {
        // 에러가 발생한 경우 콘솔에 에러 메세지 출력한다.
        console.error("Error deleting user data:", error);

        // 에러를 다시 throw하여 호출한 측에서 처리할 수 있도록 한다.
        throw error;
    }
};