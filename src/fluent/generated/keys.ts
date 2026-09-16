import {BusinessRule, ClientScript} from '@servicenow/sdk/core'
import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "39202a0adf9b482fa5d93bcc027fe4c5"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "b4902d76441b4541a491b9670cf59c98"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "aeaa58cd5975437084296738e8c8acbb"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "86d32f4884e54b578a848c65dd869e68"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "23093fbc2f704ef585c03bb5a53e8113",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "d2fa112c36514ce3925529af5fa7bb05",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "7c499e562cd4442987f9193305928c52",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
