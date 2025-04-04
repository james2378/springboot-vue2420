const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"保养类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryLixiangxiangmu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"材料类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhuangshicailiao"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"合同管理管理",
                        "menuJump":"列表",
                        "tableName":"hetong"
                    }
                ],
                "menu":"合同管理管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"合同报价管理",
                        "menuJump":"列表",
                        "tableName":"hetongbaojia"
                    }
                ],
                "menu":"合同报价管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"客户管理",
                        "menuJump":"列表",
                        "tableName":"kehu"
                    }
                ],
                "menu":"客户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核",
                            "删除"
                        ],
                        "menu":"立项项目管理",
                        "menuJump":"列表",
                        "tableName":"lixiangxiangmu"
                    }
                ],
                "menu":"立项项目管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"员工管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"员工管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"预算报价管理",
                        "menuJump":"列表",
                        "tableName":"yushuanbaojia"
                    }
                ],
                "menu":"预算报价管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"装饰材料总计划管理",
                        "menuJump":"列表",
                        "tableName":"zhuangshicailiao"
                    }
                ],
                "menu":"装饰材料总计划管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"装修进度管理",
                        "menuJump":"列表",
                        "tableName":"zhuangxiujindu"
                    }
                ],
                "menu":"装修进度管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增"
	                    ],
	                    "menu":"合同管理管理",
	                    "menuJump":"列表",
	                    "tableName":"hetong"
	                }
	            ],
	            "menu":"合同管理管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增"
	                    ],
	                    "menu":"合同报价管理",
	                    "menuJump":"列表",
	                    "tableName":"hetongbaojia"
	                }
	            ],
	            "menu":"合同报价管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增"
	                    ],
	                    "menu":"立项项目管理",
	                    "menuJump":"列表",
	                    "tableName":"lixiangxiangmu"
	                }
	            ],
	            "menu":"立项项目管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增"
	                    ],
	                    "menu":"预算报价管理",
	                    "menuJump":"列表",
	                    "tableName":"yushuanbaojia"
	                }
	            ],
	            "menu":"预算报价管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增"
	                    ],
	                    "menu":"装饰材料总计划管理",
	                    "menuJump":"列表",
	                    "tableName":"zhuangshicailiao"
	                }
	            ],
	            "menu":"装饰材料总计划管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增"
	                    ],
	                    "menu":"装修进度管理",
	                    "menuJump":"列表",
	                    "tableName":"zhuangxiujindu"
	                }
	            ],
	            "menu":"装修进度管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"员工",
	    "tableName":"yonghu"
	},
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"合同管理管理",
	                    "menuJump":"列表",
	                    "tableName":"hetong"
	                }
	            ],
	            "menu":"合同管理管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"合同报价管理",
	                    "menuJump":"列表",
	                    "tableName":"hetongbaojia"
	                }
	            ],
	            "menu":"合同报价管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"立项项目管理",
	                    "menuJump":"列表",
	                    "tableName":"lixiangxiangmu"
	                }
	            ],
	            "menu":"立项项目管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"预算报价管理",
	                    "menuJump":"列表",
	                    "tableName":"yushuanbaojia"
	                }
	            ],
	            "menu":"预算报价管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"装饰材料总计划管理",
	                    "menuJump":"列表",
	                    "tableName":"zhuangshicailiao"
	                }
	            ],
	            "menu":"装饰材料总计划管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"装修进度管理",
	                    "menuJump":"列表",
	                    "tableName":"zhuangxiujindu"
	                }
	            ],
	            "menu":"装修进度管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"客户",
	    "tableName":"kehu"
	}
]
    }
}
export default menu;
