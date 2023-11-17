require('dotenv').config();

/* eslint-disable max-len */

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
export const url = process.env.WEBSITE_URL || 'https://dev.invesnetwork.com';
export const sitename = 'Invesnetwork';

// default locale is the first one
export const locales = ['en-US', 'es', 'it-IT', 'fr-FR', 'pt-PT', 'ar', 'he'];

export const databaseUrl = process.env.DATABASE_URL;

// Listing Photos Upload Directory
export const fileuploadDir = process.env.FILEUPLOAD_DIR || './images/upload/';

// Logo upload directory
export const logouploadDir = process.env.LOGOUPLOAD_DIR || './images/logo/';

// Home page Banner upload directory
export const banneruploadDir = process.env.BANNER_UPLOAD_DIR || './images/banner/';

// User Profile Photos Upload Directory
export const profilePhotouploadDir = process.env.PROFILE_PHOTO_UPLOAD_DIR || './images/avatar/';

//Document Upload
export const documentuploadDir = process.env.FILEUPLOAD_DIR || './images/document/';

// Location upload directory
export const locationuploadDir = process.env.LOGOUPLOAD_DIR || './images/popularLocation/';

// Static block image upload directory
export const homebanneruploadDir = process.env.HOME_BANNER_UPLOAD_DIR || './images/home/';

// Amenities upload directory
export const amenitiesUploadDir = process.env.AMENITIES_UPLOAD_DIR || './images/amenities/';

// Favicon images update directory
export const faviconUploadDir = process.env.FAVICON_UPLOAD_DIR || './images/favicon/';

// whyHostUploadDir	
export const whyHostUploadDir = process.env.WHYHOST_UPLOAD_DIR || './images/whyhost/';

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: 'UA-254771866-1',
  },

};

export const googleMapAPI = 'AIzaSyCp3o2G05lCpshkUoY1N6L14r4HvbaARC8';
export const googleMapServerAPI = process.env.GOOGLE_MAP_SERVER_API;

export const payment = {

  paypal: {
    returnURL: `${url}${process.env.PAYPAL_RETURN_URL}`,
    cancelURL: `${url}${process.env.PAYPAL_CANCEL_URL}`,
    redirectURL: {
      success: `${url}${process.env.PAYPAL_SUCCESS_REDIRECT_URL}`,
      cancel: `${url}${process.env.PAYPAL_CANCEL_URL}`
    },
  },

  stripe: {
    secretKey: process.env.STRIPE_SECRET, /* From ENV */
    publishableKey: 'pk_test_51MEdlvB7YVGS8ynHvuIR6n5g9rm45i5jH4PLZbY0SSfj57qzzVDmyVDlK6ajlzLvSkVdq1OHDfmTM61f5ZglvCwV00VYNnKqhR'
  }

};

// site key for google recaptcha
export const googleCaptcha = {
  sitekey: '6LcrJBMkAAAAAHve5IZsvN3P2b23KMmH6bSBBipd',
};

export const auth = {

  jwt: { secret: process.env.JWT_SECRET },

  redirectURL: {
    login: '/dashboard',
    verification: '/user/verification',
    userbanned: '/userbanned',
    returnURLDeletedUser: '/userbanned'
  },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID,
    secret: process.env.FACEBOOK_APP_SECRET,
    returnURL: `${url}/login/facebook/return`,
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID,
    secret: process.env.GOOGLE_CLIENT_SECRET,
    returnURL: `${url}/login/google/return`,
  }
};
