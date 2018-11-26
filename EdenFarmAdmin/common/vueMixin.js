import {hashStorage} from './utils/hashStorage';
import {request} from '../api/request.js';
const globalFun = {
	data () {
		return {
		  hashStorage:"",
			request:"",
		}
	},
	methods: {
		conLog(data, key) {
			console.log(key+":"+JSON.stringify(data));
		},

	},
	created () {
		this.hashStorage = new hashStorage();
		this.request = request;
	}
}


module.exports = globalFun;