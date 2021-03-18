import axios from 'axios';

const url = 'api/posts/';
const url2 = 'api/posts/second-sheet/';

class PostService {
    //Get Posts
    static getSheetOne() {
        return new Promise((resolve, reject) => {
            try {
                axios.get(url).then((res) => {
                    resolve(res.data);
                });
            } catch(err) {
                reject(err);
            }
        });
    }

    static getSheetTwo() {
        return new Promise((resolve, reject) => {
            try {
                axios.get(url2).then((res) => {
                    const data = res.data;
                    resolve(data);
                })
            } catch(err) {
                reject(err);
            }
        });
    }

    // Create Post 
    static insertItem(data) {
        return axios.post(url, data);
    }
    static insertItem2(data) {
        return axios.post(url2, data);
    }
    // Delete Post
    static deleteItem(id) {
        return axios.delete(`${url}${id}`);
    }
    static deleteItem2(id) {
        return axios.delete(`${url2}${id}`);
    }
    // Update Post
    static updateItem(id, data) {
        return axios.put(`${url}update/${id}`, data);
    }
    static updateItem2(id, data) {
        return axios.put(`${url2}update/${id}`, data);
    }
}

export default PostService;