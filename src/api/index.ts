type FetchResponse<T = any> = {
  status: number;
  statusText: string;
  data: T;
  res: Response;
};
interface IFetchQuery {
  method: "POST" | "GET";
  url: string;
  headers?: {
    "Content-Type"?: string;
  };
  data: {
    query: string;
    variables?: any;
  };
}

export const http = async <T = any>(
  { data, headers, url, method }: IFetchQuery,
  options?: Omit<RequestInit, "method" | "headers" | "body">
): Promise<FetchResponse<T>> => {
  let params: RequestInit = {
    method,
    headers: {
      ...headers,
    },
    ...options,
  };

  if (method !== "GET") {

    params.body = JSON.stringify({
      query: data.query,
      ...(data?.variables ? { variables: data.variables } : {}),
    });
    params.headers = {
      ...params.headers,
      "Content-Type": "application/json",
    };
  } else {

    const queryParams = new URLSearchParams(data.variables).toString();
    url += `?query=${encodeURIComponent(data.query)}${
      queryParams ? `&${queryParams}` : ""
    }`;
  }

  try {
    const res = await fetch(`/api/${url}`, params);
    const { status, statusText } = res;

    const _data = await res.json();

    return {
      status,
      statusText: !_data.errors ? statusText : _data.errors[0].message,
      data: _data,
      res,
    };
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};
