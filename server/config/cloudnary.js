import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';


dotenv.config();
cloudinary.config({
  cloud_name: 'ddcy5jqzt',
  api_key: '433627956481414',
  api_secret:  'iTey0gys1idC4OFI4nlb2XYMZys',
});

export const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'movies',
    allowed_formats: ['jpg', 'jpeg', 'png'],
    resource_type: 'auto',
    quality: 'auto:best',
    fetch_format: 'auto', 
    transformation: [{ 
      quality: 'auto:best' 
    }]
  }
});

export const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    if (['image/jpeg', 'image/png', 'image/jpg'].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'), false);
    }
  }
});