import axios from "axios";

export default {
    data() {
        return {}
    },
    methods: {
        async callApi(method, url, dataObj, headers) {
            try {
                return await axios({
                    method: method,
                    url: url,
                    data: dataObj,
                    headers: headers
                })
            } catch (e) {
                return e.response;
            }
        },
    }
}