export async function apiRequest(url, options = {}) {
  let requestUrl = url;
  const baseUrl = "http://localhost:5000";
  requestUrl = `${baseUrl}${url}`;
  const headers = options.headers;
  if (!(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }
  const response = await fetch(requestUrl, {
    method: options.method || "GET",
    body:
      options.body instanceof FormData
        ? options.body
        : options.body
          ? JSON.stringify(options.body)
          : undefined,
    headers,
    credentials: "include",
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(
      data.error ||
        data.message ||
        "An error occurred while making the API request.",
    );
  }
  return data;
}
