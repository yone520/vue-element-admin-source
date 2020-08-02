let APP_BASE_URL = '';

switch ( process.env.NODE_ENV ) {
  case 'production':
    APP_BASE_URL = '1';
    break;
  case 'development':
    APP_BASE_URL = '2';
    break;
  case 'alpha':
    APP_BASE_URL = '3';
    break;
  default:
    APP_BASE_URL = '4';
    break;
}

export default APP_BASE_URL;
