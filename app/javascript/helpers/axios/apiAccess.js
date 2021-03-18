import axios from 'axios';

const apiAccess = axios.create ({
    baseURL: '/',
    headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': document.querySelector("meta[name='csrf-token']").getAttribute("content")
            }
        });
        
export default apiAccess;
        
        // withCredentials: true
