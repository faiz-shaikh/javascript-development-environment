export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:3001/'
    : 'http://59f1f6fba118a000126fbe66.mockapi.io/';
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href; // eslint-disable-line no-param-reassign
  name = name.replace(/[\]]/g, '\\$&'); // eslint-disable-line no-param-reassign
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
