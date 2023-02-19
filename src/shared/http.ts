type HTTPMethod = "GET" | "POST";
type Params = Record<string, string | number | (string | number)[]>;

export class HttpRequest {
  private baseUrl: string;
  private defaultOptions: RequestInit | undefined;

  constructor(baseUrl: string, options: RequestInit = {}) {
    this.baseUrl = baseUrl;
    this.defaultOptions = options;
  }

  public async get(endpoint: string, params: Params | null = null) {
    return await this.handleRequest("GET", endpoint, params);
  }

  public async post(endpoint: string, body: BodyInit | null) {
    return await this.handleRequest("POST", endpoint, null, { body });
  }

  private async handleRequest(
    method: HTTPMethod,
    endpoint: string,
    params?: Params | null,
    options?: RequestInit
  ) {
    try {
      let url = `${this.baseUrl}${endpoint}`;

      if (params) {
        let index = 0;
        let paramBuilder = "";

        url += "?";

        for (const param in params) {
          paramBuilder += `${index > 0 ? "&" : ""}${param}=${
            Array.isArray(params[param])
              ? (params[param] as (string | number)[]).join(",")
              : params[param]
          }`;
          index++;
        }
        url += paramBuilder;
      }
      return await fetch(url, { ...this.defaultOptions, method, ...options });
    } catch (error) {
      //NOTE: Add Logging Service Here
      console.log("Network Request Error:", error);
    }
  }
}
