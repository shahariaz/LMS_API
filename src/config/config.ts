class Config {
  public readonly PORT: number;
  public readonly CLIENT_URL: string;
  public readonly NODE_ENV: string;
  public readonly DB_URI: string;
  constructor() {
    this.PORT = Number(process.env.PORT);
    this.CLIENT_URL = process.env.CLIENT_URL!;
    this.NODE_ENV = process.env.NODE_ENV!;
    this.DB_URI = process.env.DB_URI!;
    if (this.NODE_ENV === "production") {
      this.CLIENT_URL = this.CLIENT_URL.replace("http", "https");
    }
    this.validateConfig();
  }
  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined || value === null) {
        throw new Error(`Config validation error: ${key} is not defined`);
      }
    }
  }
}

export const config: Config = new Config();
