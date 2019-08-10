'use strict';


const {
  Pool
} = require('pg')

/*
const {Client} = require('pg')
const client = new Client({
  host: '172.21.140.130',
  port: 5432,
  user: 'gpadmin',
  password: 'gpadmin',
  database: 'odps'
})
client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})
*/
exports.createColumnCategory = function(args, res, next) {
  /*
   * parameters expected in the args:
  * id (String)
  * categoryName (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteTemplate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * fid (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.downloadTemplate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * fid (String)
  **/
    var examples = {};
    if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.execQuery = function(args, res, next) {
  /**
   * parameters expected in the args:
  * query (GoldenQuery  
  /*

  let table = args.query.value.id
  let cols = args.query.value.columns

  var examples = {};
  examples['application/json'] = {
    "result": [],
    "columns": [],
    "row_count": 12345678
  };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
  */

  const pool = new Pool({
    host: '172.21.140.130',
    port: 5432,
    user: 'gpadmin',
    password: 'gpadmin',
    database: 'odps',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  })

  let table = args.query.value.id
  let cols = args.query.value.columns

  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query(`SELECT ${cols.join(',')} FROM ${table} LIMIT 200`, (err, data) => {
      if(err) {
        console.log(err ? err.stack : data.rows[0].message)
        res.end();
        return;
      }
      var examples = {};
      examples['application/json'] = {
        "result": [],
        "columns": [],
        "row_count": data.rows.length
      };
      data.rows.map((data) => {
        examples['application/json'].result.push(data)
      })
      data.fields.map((field) => {
        examples['application/json'].columns.push({
          id: field.name,
          type: field.type
        })
      })
      if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
      } else {
        res.end();
      }
      // client.end()
      release()
    })
  })
}

exports.export = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * template_id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "download_url" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.findByRegion = function(args, res, next) {
  /**
   * parameters expected in the args:
  * region (String)
  **/
  var examples = {};
  examples['application/json'] = {
    "list": [{
      "columnCategory": {
        "categories": [{
          "columns": [],
          "category": "ACT",
          "filter": "int"
        }, {
          "columns": ["stat_date"],
          "category": "date",
          "filter": "dim"
        }, {
          "columns": ["zf_series"],
          "category": "product",
          "filter": "dim"
        }, {
          "columns": ["country_display"],
          "category": "country",
          "filter": "dim"
        }]
      },
      "id": "dp_ads.ads_sc_ireport_fone_country_eff_r",
      "region": "asus",
      "columnName": {
        "list": [{
          "zh_tw": "统计日期",
          "en_us": "stat_date",
          "id": "stat_date",
          "type": "STRING",
          "main": "true"
        }, {
          "zh_tw": "客户对应的BG",
          "en_us": "zf_series",
          "id": "zf_series",
          "type": "STRING",
          "main": "true"
        }, {
          "zh_tw": "客户对应的国家名称",
          "en_us": "country_display",
          "id": "country_display",
          "type": "STRING",
          "main": "true"
        }]
      }
    }, {
      "columnCategory": {
        "categories": [{
          "columns": ["set_flag", "item_id", "is_ckd", , "ds"],
          "category": "unctg",
          "filter": "dim"
        }, {
          "columns": ["product_line", "sales_model_name", "zf_serie", "model"],
          "category": "product",
          "filter": "dim"
        }]
      },
      "id": "dp_ads.ads_dim_sc_item_fone",
      "region": "asus",
      "columnName": {
        "list": [{
          "zh_tw": "product_line",
          "en_us": "product_line",
          "id": "product_line",
          "type": "STRING",
          "main": "true"
        }, {
          "zh_tw": "sales_model_name",
          "en_us": "sales_model_name",
          "id": "sales_model_name",
          "type": "STRING",
          "main": "true"
        }, {
          "zh_tw": "zf_serie",
          "en_us": "zf_serie",
          "id": "zf_serie",
          "type": "STRING",
          "main": "true"
        }, {
          "zh_tw": "set_flag",
          "en_us": "set_flag",
          "id": "set_flag",
          "type": "STRING"
        }, {
          "zh_tw": "item_id",
          "en_us": "item_id",
          "id": "item_id",
          "type": "STRING",
          "main": "true"
        }, {
          "zh_tw": "is_ckd",
          "en_us": "is_ckd",
          "id": "is_ckd",
          "type": "STRING"
        }, {
          "zh_tw": "model",
          "en_us": "model",
          "id": "model",
          "type": "STRING",
          "main": "true"
        }, {
          "zh_tw": "ds",
          "en_us": "ds",
          "id": "ds",
          "type": "STRING"
        }]
      }
    }]
  };
  var obj0 = examples['application/json'].list[0]
  for (var i = 1; i <= 24; i++) {
    obj0.columnCategory.categories[0].columns.push(`act_h${i}`)
    obj0.columnName.list.push({
      "zh_tw": `當天${i}點的ACT`,
      "en_us": `act_h${i}`,
      "id": `act_h${i}`,
      "type": "BIGINT"
    })
  }
  for (var i = 1; i <= 24; i++) {
    obj0.columnCategory.categories[0].columns.push(`act_d1_h${i}`)
    obj0.columnName.list.push({
      "zh_tw": `昨天${i}點的ACT`,
      "en_us": `act_d1_h${i}`,
      "id": `act_d1_h${i}`,
      "type": "BIGINT"
    })
  }
  for (var i = 1; i <= 24; i++) {
    obj0.columnCategory.categories[0].columns.push(`act_avg_h${i}`)
    obj0.columnName.list.push({
      "zh_tw": `月平均${i}點的ACT`,
      "en_us": `act_avg_h${i}`,
      "id": `act_avg_h${i}`,
      "type": "BIGINT"
    })
  }
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));


  } else {
    res.end();
  }





  
}

exports.followHistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getColumnValue = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * name (String)
  * q (String)
  * offset (Long)
  * limit (Integer)
  **/
  var examples = {};
  if (args.id.value == 'dp_ads.ads_sc_ireport_fone_country_eff_r') {
    if (args.name.value == 'zf_series') {
      examples['application/json'] = {
        "data": ['ZF4',
          'ZF5',
          'ZF3'
        ]
      };
    } else if (args.name.value == 'stat_date') {
      examples['application/json'] = {
        "data": ['20180801']
      }
    } else if (args.name.value == 'country_display') {
      examples['application/json'] = {


        "data": ['EE',
          'JP',
          'MY',
          'SG',
          'TR',
          'CN',
          'HK',
          'ID',
          'IT',
          'RU',
          'TW',
          'ES+PT',
          'Global',
          'IN',
          'IR',
          'BR',
          'FR',
          'Other',
          'PH',
          'TH',
          'US',
          'VN'
        ]
      }
    }
  } else if (args.id.value == 'dp_ads.ads_dim_sc_item_fone') {
    if (args.name.value == 'sales_model_name') {
      examples['application/json'] = {
        "data": ['ZE553KL-3A081WW',
          'ZB555KL-4G142EU',
          'ZC520TL-4J159TW',
          'ZC520TL-4J130BR',
          'ZB601KL-4D001IN',
          'ZU680KL-2J007A',
          'ZE552KL-1B038BR',
          'ZB553KL-5A015WW',
          'ZC554KL-4I131SI',
          'ZE553KL-3J024BR',
          'Z171KG-1H003A',
          'ZC520KL-4I130US',
          'ZB501KL-4A025A',
          'ZB555KL-4C072EU',
          'ZB570TL-4G090BR',
          'ZU680KL-2J021A',
          'ZB601KL-4A020IN',
          'ZB570TL-4A073HK',
          'ZC554KL-4I145BC',
          'ZS570KL-2J038IN',
          'ZE554KL-6B011WW',
          'ZC551KL-4J030PH',
          'ZB501KL-4I021A',
          'ZC553KL-4H085TH',
          'ZS570KL-2J032TW',
          'ZA550KL-4D069ID',
          'ZC551KL-4J025WW',
          'ZC553KL-4G019WW',
          'ZE554KL-1A055BR',
          'ZE554KL-6B037WW',
          'ZD552KL-5A074JP',
          'ZC600KL-5A115RU',
          'ZB602KL-4A086WW',
          'ZC520KL-4G132TH',
          'ZB501KL-4G001A',
          'ZC520TL-4H151IN',
          'ZD552KL-5G007WW',
          'ZE553KL-3I102BR',
          'ZC600KL-5B120WW',
          'ZB520KL-4A123ID',
          'ZE520KL-1B017WW',
          'ZE552KL-1B047WW',
          'ZS570KL-2G062CN',
          'ZC554KL-4G129ST',
          'ZE552KL-1A088BR',
          'ZC553KL-4J074WW',
          'ZE553KL-3J063RU',
          'ZC600KL-5A073EU',
          'ZC520TL-4J072TW',
          'ZE554KL-1N127TW',
          'ZB570TL-4A018WW',
          'ZU680KL-2I019A',
          'ZE552KL-1G012TW',
          'ZC553KL-4I023HK',
          'ZE520KL-1A071ID',
          'ZC554KL-4I018MY',
          'ZE553KL-3A104BH',
          'ZD553KL-5N052WW',
          'ZC520TL-4G108WW',
          'ZB555KL-4A044RU',
          'ZB690KG-1B012A',
          'ZC553KL-4J052WW',
          'ZS550KL-2G028ID',
          'ZS570KL-2H034TW',
          'Z017DA-1B079PH',
          'ZE520KL-1G083RT',
          'ZC520TL-4H051TH',
          'ZE552KL-1A073WW',
          'ZS570KL-2J069CN',
          'ZS550KL-2G022CT',
          'ZU680KL-2H009A',
          'ZC600KL-5A007TW',
          'ZS571KL-2A065A',
          'ZC551KL-4J048TM',
          'ZC554KL-4I111WW',
          'ZD552KL-5A005WW',
          'ZS570KL-GOLD-64G',
          'ZE553KL-3A043BR',
          'ZC554KL-4A107TW',
          'ZB570TL-4G083TH',
          'ZC520KL-4G088WW',
          'ZS550KL-2J013WW',
          'ZB501KL-4I032A',
          'ZE520KL-1K104BR',
          'ZB690KG-1H014A',
          'ZD552KL-5A031TW',
          'ZE520KL-1G073ID',
          'ZB570TL-4D077US',
          'ZC553KL-4H080IN',
          'ZE552KL-1A077WW',
          'ZC553KL-4G063IN',
          'ZU680KL-2H005A',
          'ZU680KL-2J018A',
          'ZC520TL-4G166BH',
          'ZE553KL-3J057WW',
          'ZE520KL-1A090BR',
          'ZE520KL-1G050WW',
          'ZC554KL-4I103TW',
          'ZC553KL-4J082IN',
          'ZC520TL-4H148TW',
          'ZS621KL-2A005IN',
          'ZC553KL-4H036WW',
          'ZB555KL-4C124EU',
          'ZS570KL-2G070SG',
          'ZC520KL-4G121VN',
          'X00LD-5N010WW',
          'ZE553KL-3I097ID',
          'ZC520TL-4H167BH',
          'ZE553KL-3I100WW',
          'ZD552KL-5G058MY',
          'ZS570KL-2H009RU',
          'ZC521TL-4A009CT',
          'ZC554KL-4I012BR',
          'ZB570TL-4G133US',
          'ZB602KL-4A011EU',
          'ZC520TL-4J082JP',
          'ZS551KL-2A013WW',
        ]
      };
    } else if (args.name.value == 'is_ckd') {
      examples['application/json'] = {
        "data": ['Y',
          'N',
        ]
      };
    } else if (args.name.value == 'set_flag') {
      examples['application/json'] = {
        "data": ['Y',
          'N',
        ]
      };
    } else if (args.name.value == 'zf_serie') {
      examples['application/json'] = {
        "data": ['ZF4',
          'ZF5',
          'ZF3'
        ]
      };
    } else if (args.name.value == 'model') {
      examples['application/json'] = {
        "data": ['ZS551KL',
          'ZB500TL',
          'ZE553KL',
          'ZC551KL',
          'ZB501KL',
          'ZB602KL',
          'ZC520KL',
          'ZC521TL',
          'ZE552KL',
          'ZC554KL',
          'ZB570TL',
          'ZC520TL',
          'ZS550KL',
          'ZE620KL',
          'ZC600KL',
          'ZB520KL',
          'ZU680KL',
          'ZS570KL',
          'ZB555KL',
          'ZD553KL',
          'ZE554KL',
          'ZB601KL',
          'ZA550KL',
          'ZS620KL',
          'ZS621KL',
          'ZS571KL',
          'ZB690KG',
          'ZC553KL',
          'ZE520KL',
          'ZD552KL',
        ]
      }
    } else if (args.name.value == 'item_id') {
      examples['application/json'] = {
        "data": ['90AX00P1-T00050',
          '90AZ01R1-M00920',
          '90AZ01R1-M00960',
          '90AX00H3-B00010',
          '90AX00G3-E00140',
          'VPAL0011-BU1210',
          '90AZ01G1-E00110',
          '90AZ0121-M00380',
          '90AZ0173-S00240',
          '90AL0011-M00610',
          'VPAX00H4-BU4400',
          '90AX00R1-M00460',
          '90AZ0121-S00100',
          '90AX0183-M01510',
          'VPAX00Q4-BU1200',
          'VPAZ01B2-BU3000',
          '90AX0171-C00020',
          '90AX0087-M02970',
          '90AZ0164-M00040',
          '90AZ0173-M01300',
          '90AZ01F4-M00040',
          '90AZ01K4-M00430',
          '90AZ01K2-T00130',
          '90AX0175-M00970',
          '90AZ0125-M01840',
          '90AX00D0-C00360',
          '90AZ01H0-C00790',
          '90AZ01B5-E00061',
          '90AX00H2-M01950',
          '90AZ01H3-M00630',
          '90AZ01H3-M00090',
          '90AX00R1-M00640',
          '90AX0085-K00020',
          '90AX00K2-M00150',
          '90AZ01M9-M01340',
          '90AZ0171-M01720',
          '90AX00P2-M00940',
          '90AX00L1-S00020',
          'VPAX0183-BU2000',
          '90AX00T0-C00030',
          '90AX00L3-M01430',
          '90AX00T1-S00020',
          '90AZ01M9-M00570',
          '90AK0070-C00010',
          '90AK0072-S00030',
          '90AK0021-M00270',
          '90AX0171-E00220',
          'VPAK0074-BU4200',
          '90AZ01R2-B00010',
          '90AX0086-M00360',
          '90AZ0164-B00030',
          '90AX00K3-K00010',
          '90AZ0170-C00010',
          '90AX00R2-M00630',
          '90AZ01G1-M00420',
          '90AZ01M7-M00770',
          '90AZ0170-C00520',
          '90AX0080-K00250',
          '90AX00L4-M00810',
          '90AL0011-M00070',
          '90AX00T0-C50040',
          'VPAX00I2-BU1000',
          '90AX00H0-C00580',
          '90AK0021-S00052',
          '90AZ01H0-C00620',
          '90AX00I1-M00980',
          '90AZ01R1-M00450',
          '90AK0012-M00290',
          '90AX00P1-M00570',
          '90AX00R1-CX0040',
          '90AZ01M4-M00560',
          'VPAK0071-BU1200',
          '90AX00T2-M00760',
          '90AX0080-K00180',
          '90AX00H2-M00940',
          '90AX00D1-E00071',
          '90AZ01F4-M00310',
          '90AX00R2-E00090',
          '90AX00L1-C00060',
          'VPAX0085-BU1000',
          '90AX00H1-C00060',
          '90AX00H2-M02270',
          '90AZ0162-M00460',
          '90AZ0170-K00270',
          '90AX00P4-T00170',
          'VPAZ01K2-BU4000',
          '90AK0071-S00013',
          '90AX00I0-C00350',
          '90AX00P0-C00100',
          '90AX00I3-M00300',
          '90AZ0174-K00010',
          '90AX00I1-E00045',
          '90AZ01K1-M01760',
          '90AX00Q5-M00830',
          '90AX0171-T00120',
          '90AX00R0-C00050',
          '90AX0080-C000C0',
          '90AX00L4-M01790',
          '90AX00T1-M01670',
          '90AX00Q1-E00030',
          '90AX0170-C40030',
          '90AK0073-C00060',
          '90AX0172-B00040',
          '90AZ01H0-K00040',
          '90AZ01K4-M00760',
          '90AX00P4-M01880',
          '90AZ0172-M01260',
          '90AZ01R1-M00410',
          '90AZ01B2-M00770',
          '90AK0071-M01500',
          '90AX0182-M00110',
          'VPAK0075-BU5200',
          '90AX00I1-M01510',
          '90AX00P1-M00220',
          '90AX00L0-C20050',
          '90AX00L3-M01830',
          '90AX00R4-M01020',
          '90AZ01K1-M01500',
          '90AX00I1-M00100',
          '90AZ01H4-M01320',
          '90AX0087-M02880',
          '90AX0171-T00090',
          '90AK0012-K00010',
          '90AZ0161-M01440',
          '90AX00I3-M00410',
          '90AX00Q3-M00230',
          '90AX00D4-C00030',
          '90AZ01M4-M00960',
          '90AK0011-M00480',
          '90AZ01H0-C00350',
          '90AZ0173-M00530',
          '90AX00R5-CX0040',
          '90AX00Q1-M00430',
          '90AZ0161-M00890',
          '90AZ0123-K00010',
          '90AZ01R2-M01030',
          '90AX00I1-M01990',
          '90AX00L0-C00250',
          '90AZ0164-M01300',
          '90AX0086-M02410',
          '90AZ01H3-M00670',
          '90AZ01R0-C000R0',
          '90AZ01H0-C00750',
          'VPAA00T1-BU3100',
          'VPAX0183-BU1100',
          'VPAZ0123-BU2000',
          'VPAX00P2-BU6000',
          '90AX0086-M00900',
          'VPAX00L2-BU1100',
          '90AZ01R1-M00810',
          '90AZ01H3-M00410',
          '90AX0085-M00570',
          '90AX00T0-C40070',
          '90AX00P1-M01380',
          '90AK0070-C00120',
          '90AX00T2-M00650',
          '90AZ01G1-S00080',
          'VPAX0182-BU3400',
          '90AZ01G1-M00110',
          '90AZ01K0-C00230',
          '90AX00H3-C00080',
          '90AX00Q0-C00080',
          '90AX00P2-CX0010',
          '90AX00L1-M01090',
          '90AZ01R1-M00010',
          '90AX00D4-M01710',
          '90AX00L4-M02180',
          '90AX00I3-M01880',
          '90AX00T2-M01600',
          '90AZ0170-C00340',
          '90AZ01M5-E00031',
          'VPAK0072-BU4800',
          '90AZ01M4-M00810',
          '90AZ01B2-T00081',
          'VPAX0081-BU1000',
          '90AX0172-E00180',
          '90AX0172-T00060',
          '90AX0180-C00200',
          '90AX0170-C40070',
          '90AZ01K4-M00320',
          'VPAX00H1-BU6500',
          'VPAX00T1-BU1004',
          '90AX0171-E00080',
          '90AZ0164-M00310',
          '90AX00K1-E00010',
          '90AX0183-E00140',
          '90AX00L0-K00030',
          '90AZ01H3-S00030',
          'VPAX0173-BU1200',
          '90AX00L1-M02190',
          '90AX0085-M02060',
          '90AZ0173-M01160',
          '90AZ0164-M00660',
          '90AX00Q0-C20020',
          '90AX00D3-M00770',
          '90AZ0164-M01740',
          '90AZ01B4-M00390',
          '90AX00D3-M00680',
          'VPAX00L4-BU3100',
          '90AX00L2-T00110',
          '90AX0183-M00290',
          '90AX0170-C50080',
          '90AZ0173-M01270',
          '90AZ01K5-M01980',
          '90AX0080-C00290',
          '90AX00D4-K00030',
          '90AX0087-M02260',
          '90AZ01R1-B00020',
          '90AX00D0-K00180',
          '90AX0171-M01670',
          '90AK0071-M00770',
          '90AX00I0-C00721',
          '90AX00T1-B00030',
          '90AX00P4-B11000',
          '90AX00P4-M01260',
          '90AX00Q0-C21250',
          '90AX0170-C40100',
          '90AX00H3-M01900',
          '90AZ01G1-M00200',
          'VPAZ01K4-BU2000',
          '90AX00I2-M02060',
          '90AX0080-C00100',
          '90AX0175-M01410',
          '90AL0010-B00010',
          '90AZ01K5-M00770',
          'VPAX00P1-BU5000',
          'VPAX00H3-BU4500',
          '90AX00L3-M01030',
          '90AX00D0-K00250',
          '90AZ0123-S00160',
          '90AX0080-K00030',
          '90AL0011-S00050',
          '90AX00T2-M00250',
          '90AZ01K1-C00040',
          '90AZ0121-M01400',
          '90AX00P1-T00230',
          '90AX0085-M01890',
          '90AZ01R2-M00680',
          '90AX00H1-M00750',
          '90AX00T0-C500H0',
          '90AX0181-E00160',
          'VPAX00T3-BU3000',
          '90AX00Q1-T00150',
          '90AX0180-C00190',
          '90AZ0172-C00030',
          'VPAZ0162-BU3000',
          '90AZ01B4-M00660',
          '90AZ0173-M01740',
          '90AK0070-C00050',
          '90AZ01H2-S00200',
          'VPAX00L4-BU2200',
          '90AX0085-M00840',
          '90AX00H2-M00030',
          '90AX00L0-K01020',
          '90AL0013-M00380',
          '90AX00H1-M02060',
          '90AZ01R1-M00050',
          '90AX00D2-M01370',
          '90AZ01K4-M01370',
          '90AX00G2-M00190',
          'VPAX0175-BU1501',
          'VPAZ01K4-BU6000',
          'VPAL0014-BU1110',
          '90AX00R1-M00330',
          '90AZ01K3-T00120',
          '90AX00L3-M01140',
          '90AX00H3-M01290',
          '90AX0182-B00050',
          '90AX00L2-M01680',
          '90AX00I2-M01520',
          '90AZ0121-M00850',
          '90AZ0161-B00020',
          '90AX0086-E00210',
          '90AX00L0-C10130',
          '90AX00D0-K00360',
          '90AZ0170-C00120',
          '90AX0086-M00070',
          '90AX00L1-M01960',
          '90AX00H1-M00660',
          '90AZ01R1-M00670',
          '90AZ01H1-M00500',
          '90AX00D0-C00500',
          '90AZ01M4-M01220',
          '90AX00P2-M00070',
          '90AX00H2-M01060',
          '90AX00T3-C00040',
          '90AZ0164-M00130',
          'VPAZ0125-BU1300',
          'VPAZ01B2-BU2003',
          '90AZ01K1-M00370',
          '90AX00I3-M00120',
          '90AK0072-M00810',
          '90AK0072-C00040',
          '90AX0171-M00320',
          'VPAK0075-BU4000',
          'VPAX00R4-BU1000',
          '90AX00Q0-C20090',
          'VPAX00T3-BU5003',
          '90AZ0120-K00050',
          '90AX00L2-M01050'
        ]
      }
    }
  }
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
  
}

exports.getHistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * oid (String)
  * type (String)
  * offset (Long)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "list" : [ {
    "url_pattern" : "aeiou",
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "id" : "aeiou",
    "user" : "aeiou"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getTemplateList = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "size" : 123,
  "list" : [ {
    "filename" : "aeiou",
    "link" : "aeiou",
    "mid" : "aeiou",
    "id" : "aeiou",
    "mdt" : "2000-01-23T04:56:07.000+00:00",
    "desc" : "aeiou"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.moveColumnCategory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * data (MoveColumnCategory)
  **/
  // no response value expected for this operation
  res.end();
}

exports.updateColumnName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * data (ColumnName)
  **/
  // no response value expected for this operation
  res.end();
}

exports.uploadTemplate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * desc (String)
  * file (file)
  * fid (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "filename" : "aeiou",
  "link" : "aeiou",
  "mid" : "aeiou",
  "id" : "aeiou",
  "mdt" : "2000-01-23T04:56:07.000+00:00",
  "desc" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.upsertRegion = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * region (String)
  **/
  // no response value expected for this operation
  res.end();
}

