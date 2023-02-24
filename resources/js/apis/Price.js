import axios from "axios";
const Price = {
    list: () => {
        return axios.get('https://pastebin.com/raw/8ZdGWx4h');
    }
};
export default Price;
