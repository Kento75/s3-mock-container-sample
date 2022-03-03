const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  // コンテナエイリアス or サービス名でアクセスできる
  endpoint: 'http://s3mock.test.com:9090',
  // S3Mock使う時は <バケット名>.hostname:9090 => hostname:9090/<バケット名>
  s3ForcePathStyle: true,
});

// テストコード バケット検索
s3.listBuckets(function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});
