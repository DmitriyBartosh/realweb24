<?php
$_POST = json_decode(file_get_contents('php://input'), true);

$branding = $_POST['service_branding'];
$site = $_POST['service_site'];
$smm = $_POST['service_smm'];
$shop = $_POST['service_shop'];
$social = $_POST['service_social'];
$app = $_POST['service_app'];
$media = $_POST['service_media'];

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$about = $_POST['user_about'];
$cost = $_POST['user_cost'];

$token = "1781652917:AAHvrUspp2Sz79_6_fdla8C-1sBHuoYDaNM";
$chat_id = "-505339555";

$service_arr = array($branding, $site, $smm, $shop, $social, $app, $media);

foreach($service_arr as $value) {
  if($value){
  $service .= $value."%0A";
  }
}

$arr = array(
  'Услуги: ' => $service,
  'Имя: ' => $name,
  'Номер телефона: ' => $phone,
  'О проекте: ' => $about,
  'Бюджет: ' => $cost,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>