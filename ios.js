var body = $response.body;
var obj = JSON.parse(body);


if (obj.data) {
  obj.data.type = 1;
  obj.data.vip_type = 1;
  obj.data.is_vip = true;
  
  if (!obj.data.membership) {
      obj.data.membership = {};
  }
  
  obj.data.membership.level = 1;
  obj.data.membership.display_name = "Wink VIP";
  obj.data.membership.status = 1;
  
  obj.data.valid_time = 32495529599000;
  obj.data.expire_time = 32495529599000;
}

$done({ body: JSON.stringify(obj) });