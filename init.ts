import { definePlugin } from "@/modules/plugin";
import log4js from "log4js";
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
		const logger = log4js.getLogger( "test-test" );
		lodash.forEach( [ 1, 2, 3 ], ( value ) => {
			logger.info( value );
		} );
	},
} );