export default () => {
  return {
    nodeEnv: process.env.NODE_ENV || 'localhost',
    apiUrl: process.env.APP_API_URL,

    port: parseInt(process.env.PORT, 10) || 3000,
    expiresIn: parseInt(process.env.EXPIRES_IN, 10),
    jwtSecret: process.env.JWT_SECRET,

    httpTimeout: parseInt(process.env.HTTP_TIMEOUT),

    sendGridKey: process.env.SENDGRID_KEY,
    emailUser: process.env.EMAIL_USER,
    domainName: process.env.DOMAIN_NAME,

    storageDriver: process.env.STORAGE_DRIVER,
    dynamoDBUrl: process.env.DYNAMODB_URL,
    awsRegion: process.env.AWS_REGION,
    s3Bucket: process.env.S3_BUCKET,

    dbHost: process.env.DB_HOST,
    dbPort: parseInt(process.env.DB_PORT, 10),
    dbUser: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_DATABASE,

    mailDriver: process.env.MAIL_DRIVER,
  };
};
