import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

import type { UploadFile } from './types.js';

export const buildMinioStorage = (
  bucket: string,
  endpoint: string,
  accessKeyId: string,
  secretAccessKey: string,
  region: string,
  publicUrl?: string
) => {
  if (!endpoint) {
    throw new Error('Endpoint must be provided for MinIO storage');
  }

  const client = new S3Client({
    endpoint, // Custom MinIO endpoint
    forcePathStyle: true, // MinIO requires path-style access
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
    region,
  });

  const uploadFile: UploadFile = async (data, objectKey, { contentType } = {}) => {
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: objectKey,
      Body: data,
      ContentType: contentType,
    });

    await client.send(command);

    const baseUrl = publicUrl ?? `${endpoint}/${bucket}`;

    return {
      url: `${baseUrl}/${objectKey}`,
    };
  };

  return { uploadFile };
};
