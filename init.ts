import { definePlugin } from "@/modules/plugin";
import lodash from "lodash";

export default definePlugin( {
	name: "测试测试",
	cfgList: [],
	repo: {
		owner: "MarryDream",
		repoName: "upgrade-test",
		ref: "master"
	},
	mounted() {
		lodash.forEach( [ 1, 2, 3 ], ( value ) => {
			console.log( value );
		} );
	},
} );