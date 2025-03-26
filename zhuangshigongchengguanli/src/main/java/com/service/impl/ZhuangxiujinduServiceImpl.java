package com.service.impl;

import com.utils.StringUtil;
import org.springframework.stereotype.Service;
import java.lang.reflect.Field;
import java.util.*;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.transaction.annotation.Transactional;
import com.utils.PageUtils;
import com.utils.Query;
import org.springframework.web.context.ContextLoader;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import com.dao.ZhuangxiujinduDao;
import com.entity.ZhuangxiujinduEntity;
import com.service.ZhuangxiujinduService;
import com.entity.view.ZhuangxiujinduView;

/**
 * 装修进度 服务实现类
 */
@Service("zhuangxiujinduService")
@Transactional
public class ZhuangxiujinduServiceImpl extends ServiceImpl<ZhuangxiujinduDao, ZhuangxiujinduEntity> implements ZhuangxiujinduService {

    @Override
    public PageUtils queryPage(Map<String,Object> params) {
        if(params != null && (params.get("limit") == null || params.get("page") == null)){
            params.put("page","1");
            params.put("limit","10");
        }
        Page<ZhuangxiujinduView> page =new Query<ZhuangxiujinduView>(params).getPage();
        page.setRecords(baseMapper.selectListView(page,params));
        return new PageUtils(page);
    }


}
