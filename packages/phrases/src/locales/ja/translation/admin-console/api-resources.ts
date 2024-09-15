const api_resources = {
  page_title: 'API リソース',
  title: 'API リソース',
  subtitle: '承認されたアプリケーションが利用できるAPIを定義',
  create: 'API リソースを作成',
  api_name: 'API 名',
  api_name_placeholder: 'API 名を入力してください',
  api_identifier: 'API 識別子',
  resource_id: 'リソースID',
  api_identifier_placeholder: 'https://your-api-identifier/',
  api_identifier_tip:
    'API リソースの一意の識別子です。絶対URIで、フラグメント(#)コンポーネントはありません。OAuth 2.0での<a>リソースパラメーター</a>に等しいです。',
  default_api: 'デフォルトのAPI',
  default_api_label:
    'テナントごとにデフォルトのAPIを0または1つだけ設定できます。デフォルトのAPIが指定されている場合、認証リクエストでリソースパラメータを省略できます。その後のトークン交換は、デフォルトのAPIを対象として行われます。それにより、JWTが発行されます。<a>詳細を見る</a>',
  api_resource_created: 'APIリソース{{name}}が正常に作成されました',
  invalid_resource_indicator_format: 'API 識別子は有効な絶対URIである必要があります。',
};

export default Object.freeze(api_resources);
