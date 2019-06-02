import axios from 'axios'


class TodoDataService{

    retrieveAllTodos(name){
        // console.log('executed service') 
             return axios.get(`http://localhost:8082/users/${name}/todos`);
    }

    deleteTodo(name, id){
        return axios.delete(`http://localhost:8082/users/${name}/todos/${id}`)
    }
}

export default new TodoDataService();