  
import api from '@/service/api'

export default {
    create (credentials) {
        return api().post('/api/supports', credentials)
    }

}