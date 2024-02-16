export function getCompanyNameFromURL() {
  const queryParams = new URLSearchParams(window.location.search);
  const companyName = queryParams.get('application-for');

  return companyName || false;
}