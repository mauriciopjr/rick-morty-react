import axios from 'axios';

const api = {
    getCharacterByName: async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character/2')

        return response
    }
}

export default api;