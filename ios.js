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
  
  obj.data.valid_time = 1569664800000;
  obj.data.expire_time = 32495529599000;
}

$done({ body: JSON.stringify(obj) });

var body = $response.body;
var obj = JSON.parse(body);

// // Overwrite the 'data' section of the response with VIP information
// obj.data = {
//   "active_sub_type": 2,
//   "account_type": 1,
//   "sub_type_name": "续期", // Renewal
//   "active_sub_order_id": "7069961436604422668",
//   "trial_period_invalid_time": "",
//   "current_order_invalid_time": "32495508000000", // A timestamp far in the future
//   "active_order_id": "7069961436340181123",
//   "limit_type": 0,
//   "active_sub_type_name": "续期", // Renewal
//   "use_vip": true,
//   "have_valid_contract": true,
//   "derive_type_name": "普通会员", // Regular Member
//   "derive_type": 1,
//   "in_trial_period": false,
//   "is_vip": true, // The key flag granting access
//   "membership": {
//     "id": "4",
//     "display_name": "Wink会员", // "Wink Member"
//     "level": 1,
//     "level_name": "普通会员" // Regular Member
//   },
//   "active_promotion_status_list": [
//     2
//   ],
//   "sub_type": 2,
//   "account_id": "1230010086",
//   "invalid_time": "32495529599000", // Expiration date (Year 2999+)
//   "valid_time": "1569664800000",
//   "active_product_id": "0",
//   "active_promotion_status": 2,
//   "show_renew_flag": true
// };

// // Return the modified body to the app
// $done({
//   body: JSON.stringify(obj)
// });