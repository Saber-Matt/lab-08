import dotenv from 'dotenv';
import fs from 'fs';
import s3 from 'aws-sdk/clients/s3';

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY


const s3 = newS3({
  region,
  accessKeyId,
  secretAccessKey
})

//uploads a file to s3
upload(file, => {
  const fileStream = fs.createReadStream(file.path)

  const uploadParams = {
    Bucket: bucketName
    Body: fileStream,
    Key: file.filename
  }

  return s3.upload(uploadParams).promise()
}

exports.uploadFile = uploadFile


//downloads a file from s3
getFileStream => (fileKey){
    const downloadParams = {
      key: fileKey,
      Bucket: bucketName
    }
    return s3.getObject(downloadParams).createReadStream()
  }
exports.getFileStream = getFileStream