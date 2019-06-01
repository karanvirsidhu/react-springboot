import axios from 'axios'


class TodoDataService{

    retrieveAllTodos(name){
        // console.log('executed service') 
             return axios.get(`http://localhost:8082/users/${name}/todos`);
}
}

export default new TodoDataService();