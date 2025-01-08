class Config {
  public readonly PORT: number;
  public readonly CLIENT_URL: string;
  public readonly NODE_ENV: string;
  public readonly DB_URI: string;
  public readonly REDIS_URI: string;
  public readonly JWT_SECRET: string;
  public readonly JWT_REFRESH_SECRET: string;
  public readonly JWT_ACCESS_EXPIRE: string;
  public readonly JWT_REFRESH_EXPIRE: string;
  constructor() {
    this.PORT = Number(process.env.PORT);
    this.CLIENT_URL = process.env.CLIENT_URL!;
    this.NODE_ENV = process.env.NODE_ENV!;
    this.DB_URI = process.env.DB_URI!;
    this.REDIS_URI = process.env.REDIS_URI!;
    this.JWT_SECRET = process.env.JWT_SECRET!;
    this.JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;
    this.JWT_ACCESS_EXPIRE = process.env.JWT_ACCESS_EXPIRE!;
    this.JWT_REFRESH_EXPIRE = process.env.JWT_REFRESH_EXPIRE!;

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
